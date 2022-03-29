import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { MarketProvider } from './Context/Hooks/MarketProvider';

ReactDOM.render(
  <MarketProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MarketProvider>,
  document.getElementById('root')
);
