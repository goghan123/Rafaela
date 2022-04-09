import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import Principal from './Principal.js';

try {
  const contenedor = document.getElementById('root');
  const root = ReactDOMClient.createRoot(contenedor);
  root.render(
    <React.StrictMode>
      <Principal />
    </React.StrictMode>,
  );
} catch (e) {
  console.log(e);
}
