import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
