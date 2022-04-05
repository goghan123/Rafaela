import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import Principal from './Principal.js';
// import reportWebVitals from './reportWebVitals';

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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
