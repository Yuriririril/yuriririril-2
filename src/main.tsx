import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import StateProvider from './context/StateContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);
