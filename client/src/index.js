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
import Help from './pages/Help';
import About from './pages/About';
import Contact from './pages/Contact';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<App />} />
        <Route path="/compressed" element={<Compressed />} />
        <Route path="/decompressed" element={<Decompressed />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
