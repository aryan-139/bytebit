import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Compressed from './pages/Compressed';
import Decompressed from './pages/Decompressed';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<Main />} />
        <Route path="/compressed" element={<Compressed />} />
        <Route path="/decompressed" element={<Decompressed />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
