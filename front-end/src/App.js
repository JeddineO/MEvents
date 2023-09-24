import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Provider from './pages/provider/Provider';
import Auth from './pages/provider/Auth';
import Create from './pages/provider/Create';
import Show from './pages/provider/Show';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/provider" element={<Provider />} />
        <Route path="/provider/signin" element={<Auth />} />
        <Route path="/provider/signup" element={<Create />} />
        <Route path="/provider/show" element={<Show />} />
      </Routes>
    </Router>
  );
}

export default App;
