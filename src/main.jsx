import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // ✅ Added for SEO
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* ✅ Wrap App for SEO-safe Helmet usage */}
      <BrowserRouter> {/* ✅ WRAP App in BrowserRouter */}
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
