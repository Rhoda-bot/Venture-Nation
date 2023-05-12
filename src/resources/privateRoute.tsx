import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }: any) => (
  <Route
    {...rest}
    element={isAuthenticated ? <Component /> : <Navigate to="/auth/sign-in" />}
  />
);

export default PrivateRoute;
