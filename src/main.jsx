// Import the core React library
import React from 'react';

// Import the ReactDOM library used to interact with the DOM (your HTML page)
import ReactDOM from 'react-dom/client';

// Import the main App component (our entire site lives inside this)
import App from './App';

// Import BrowserRouter to enable routing (page switching without reloading)
import { BrowserRouter } from 'react-router-dom';

// Import global CSS styles
import './index.css'; // This file contains base styles for the site

// Tell React where to render everything — inside the <div id="root"></div> in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> is a helpful wrapper for highlighting potential issues in development
  <React.StrictMode>
    {/* Wrap the App with BrowserRouter so we can use routes like /about-author, /contact, etc. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
