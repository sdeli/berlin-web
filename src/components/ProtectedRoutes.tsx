import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/authSlice';

interface LoggedInGuardProps {
  element: React.ReactElement;
}

export const ProtectedPageGuard: React.FC<LoggedInGuardProps> = ({ element }) => {
  const auth = useSelector(selectIsAuth);
  console.log('auth LoggedInGuard')
  console.log(auth)
 return  auth.isAuthenticated ? element : <Navigate to="/login" />;
};

export const LoggedInGuard: React.FC<LoggedInGuardProps> = ({ element }) => {
  const auth = useSelector(selectIsAuth);
  console.log('auth LoggedInGuard')
  console.log(auth)
 return  !auth.isAuthenticated ? element : <Navigate to="/protected" />;
};