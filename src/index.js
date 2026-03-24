import React from 'react';
import './index.css'; 
import ReactDOM from 'react-dom/client'; 
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store';

// 1. Create the root first
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Render to that root
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>
);