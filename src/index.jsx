import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import LandingPage from './pages/landingPage';
import LandingPageConfirmado from './pages/landingPageConfirmado';
import Totem from './pages/toten';
import Login from './pages/Login';
import AdmPedidos from './pages/admPedidos';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<LandingPage />} />
          <Route path="/Totem" element={<Totem />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/pedidos" element={<AdmPedidos/>} />
          <Route path="/Confirmado" element={<LandingPageConfirmado />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
