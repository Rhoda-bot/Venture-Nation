import { useState } from "react";
import { AuthContext } from "./authContext";

const [isAuthenticated, setIsAuthenticated] = useState(false);
export const AuthProvider = ({ children }: any) => {
  
    const login = () => {
      // Perform login logic, set isAuthenticated to true if successful
      setIsAuthenticated(true);
    };
  
    const signup = () => {
      // Perform signup logic, set isAuthenticated to true if successful
      setIsAuthenticated(true);
    };
  
    const logout = () => {
      // Perform logout logic, set isAuthenticated to false
      setIsAuthenticated(false);
    }};
    