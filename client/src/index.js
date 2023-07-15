import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Compressed from './pages/Compressed';
import Decompressed from './pages/Decompressed';
import Navbar from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Navbar/>,
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/main" element={<Main/>}/>
      <Route path="/compressed" element={<Compressed/>} />
      <Route path="/decompressed" element={<Decompressed/>} />
    </Routes>
    </BrowserRouter>
   
   

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
