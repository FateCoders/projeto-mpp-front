import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  checkAuthStatus,
  logout as serviceLogout,
  login as serviceLogin,
} from "../services/auth/authService";
import type { UserType } from "../types/auth";

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserType | null;
  isLoading: boolean;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const verifyAuth = async () => {
      const response = await checkAuthStatus();
      if (response?.usuario) {
        setUser(response.usuario);
      }
      setIsLoading(false);
    };

    verifyAuth();
  }, []);

  const login = async (email: string, senha: string) => {
    const response = await serviceLogin(email, senha);
    if (response?.usuario && response?.token) {
      localStorage.setItem("token", response.token);
      setUser(response.usuario);
    }
  };

  const logout = async () => {
    await serviceLogout();
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};