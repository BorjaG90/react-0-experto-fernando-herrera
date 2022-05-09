import React from 'react';
import { Routes, Route ,BrowserRouter} from 'react-router-dom';

import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../components/login/LoginScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        } />
        <Route path="/*" element={
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}
