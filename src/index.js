import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import App from './App';
import Cart from './routes/Cart';
import Login from './routes/Login'
import Register from './routes/Register';
import reportWebVitals from './reportWebVitals';

const container =   document.getElementById('root');
const root = createRoot(container)

root.render(
  <BrowserRouter>
      <Header/>

      <Routes>
      <Route path="/" element={<App />} />
      <Route path="cart" element={<Cart />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
