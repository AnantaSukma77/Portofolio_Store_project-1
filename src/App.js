// import logo from './logo.svg';
// import './App.css';
// import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Cart from './newpages/Cart';
import LandingPage from './newpages/LandingPage';
import Login from './newpages/Login';
import NotFound from './newpages/NotFound';
import { login } from './utils/api';

function App() {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    const tokenItem = window.localStorage.getItem('email');
    if (tokenItem) {
      setAuth(true);
    }
  }, []);

  const navigate = useNavigate();
  const successLogin = ({ email, password }) => {
    const isSuccess = login({ email, password });
    if (isSuccess) {
      navigate('/');
    }
    console.log(email, password);
  };
  return (
    <Router>
      <Routes>
        {auth ? (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Navigate to={'/'} replace />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login successLogin={successLogin} />} />
            <Route path="*" element={<Navigate to={'/login'} replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
