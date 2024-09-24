import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/UserProvider.jsx";

const ProtectedRoute = () => {
	const { user, isAuthenticated } = useAuth();

	if (!isAuthenticated) return <Navigate to="/" replace />;

	return <Outlet />;
};

export default ProtectedRoute;
