import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {LoggedInGuard, ProtectedPageGuard} from './components/ProtectedRoutes';
import { MainPage } from './components';
import LoginPage from './components/LoginPage/LoginPage';
import RegistrationPage from './components/RegisterPage/RegistrationPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoggedInGuard element={<div><LoginPage></LoginPage></div>} />} />
        <Route path="/register" element={<LoggedInGuard element={<div><RegistrationPage></RegistrationPage></div>} />} />
        <Route path="/protected" element={<ProtectedPageGuard element={<div><MainPage></MainPage></div>} />} />
        <Route path="/" element={<Navigate to="/protected" />} />
      </Routes>
    </Router>
  );
};

export default App;
