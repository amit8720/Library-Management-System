import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './components/store'; // Ensure this points to the correct store file
import App from './App'; // Ensure this points to the correct App file
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// Create the root element for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
