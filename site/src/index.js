import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Consultarpets from './pages/consultarpets';
import Cadastrarpets from './pages/cadastrarpets';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Home/>}></Route>
        <Route path = '/cadastrarpets' element={<Cadastrarpets/>}></Route>
        <Route path = '/consultarpets' element={<Consultarpets/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

