import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import { MainComponent } from './Principal.js';
// import { checkCache } from './CacheContent.js';
// import { BarraSuperior } from './components/BarraSuperior.js';

// const utilitiesSet = useTotalAmountProvider()
// const utilitiesSet = useTotalAmountProvider();

try {
  // checkCache();
  const contenedor = document.getElementById('root');
  const root = ReactDOMClient.createRoot(contenedor);
  root.render(
    <React.StrictMode>
      {/* <BarraSuperior /> */}
      <MainComponent />
    </React.StrictMode>
  );
} catch (e) {
  console.log(e);
}
