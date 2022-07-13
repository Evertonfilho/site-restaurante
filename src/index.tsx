import React from 'react';
import ReactDOM from 'react-dom/client';
import Cardapio from './pages/Cardapio';
import "normalize.css";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cardapio />
  </React.StrictMode>
);
