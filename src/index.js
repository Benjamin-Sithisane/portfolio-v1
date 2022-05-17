import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Helmet>
    <title>Benjamin Sithisane | Software Developer</title>
  </Helmet>
    <App />
  </BrowserRouter>
);

reportWebVitals();
