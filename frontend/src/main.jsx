import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '@arcgis/core/assets/esri/themes/light/main.css';
import esriConfig from '@arcgis/core/config';
import { grid } from 'ldrs';
grid.register();

// Set API Key from environment variable
esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
