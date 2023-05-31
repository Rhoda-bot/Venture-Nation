import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import ProfileHome from "../components/profiles/profileHome";
import SignIn from "../components/authentication/sign-in";
import SignUp from "../components/authentication/sign-up";
import LearningHub from "../components/learning-hub/learningHub";

const checkAuthenticatedUser = () => {
    const user_token = localStorage.getItem('token' || []);
    return user_token && true
 
 }

 export const ProtectedRoute = () => {
    const isAuthenticated = checkAuthenticatedUser();
    return isAuthenticated ? <ProfileHome /> : <Navigate to="/auth/sign-in" />
}
export const ProtectedRoute2 = () => {
    const isAuthenticated = checkAuthenticatedUser();
    return isAuthenticated ? < LearningHub/> : <Navigate to="/auth/sign-in" />
}

export const GaurdSignInPage = () => {
    const isAuthenticated = checkAuthenticatedUser();
    return !isAuthenticated ? <SignIn /> : <Navigate to="/profile" />
}

export const GaurdSignupPages = () => {
    const isAuthenticated = checkAuthenticatedUser();
    return !isAuthenticated ? <SignUp /> : <Navigate to="/profile" />
}
