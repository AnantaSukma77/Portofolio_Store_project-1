// import logo from './logo.svg';
// import './App.css';
// import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './newpages/Cart';
import LandingPage from './newpages/LandingPage';
import Login from './newpages/Login';
import NotFound from './newpages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
