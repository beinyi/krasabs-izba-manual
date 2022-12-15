import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

process.env.NODE_ENV !== 'production' &&
  console.log('DevMode/NonProduction');

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/infohelpmobile">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
