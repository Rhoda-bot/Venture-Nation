import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import ProfileHome from "../components/profiles/profileHome";

const checkAuthenticatedUser = () => {
    const user_token = localStorage.getItem('token' || []);
    return user_token && true
 
 }

 export const ProtectedRoute = () => {
    const isAuthenticated = checkAuthenticatedUser();
    return isAuthenticated ? <ProfileHome /> : <Navigate to="/auth/sign-in" />
}