import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider,useAuth } from './contexts/AuthContext';

// Create the root element once
const root = createRoot(document.getElementById('root'));


// Render the app, no need to pass the container again
root.render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>
);
