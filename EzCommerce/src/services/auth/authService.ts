import axios from "axios";
import type { UserType } from "../../types/auth";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function login(email: string, senha: string) {
  const response = await api.post("/login", { email, senha });
  return response.data;
}

export async function register(userData: Omit<UserType, 'id'>) {
  const response = await api.post("/registrar", userData);
  return response.data;
}

export async function logout() {
  try {
    await api.post("/logout");
  } catch (error) {
    console.error("Falha ao deslogar no servidor:", error);
  }
}

export async function checkAuthStatus(): Promise<{ usuario: UserType } | null> {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  try {
    const response = await api.get("/verificar-token");
    return response.data;
  } catch (_) {
    return null;
  }
}