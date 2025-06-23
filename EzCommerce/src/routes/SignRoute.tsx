import React, { type JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

type SignRouteProps = {
    children: JSX.Element;
}

const SignRoute: React.FC<SignRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();
    
    if (isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default SignRoute;