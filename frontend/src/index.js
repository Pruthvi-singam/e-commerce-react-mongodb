import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Create the root element once
const root = createRoot(document.getElementById('root'));

// Render the app, no need to pass the container again
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
