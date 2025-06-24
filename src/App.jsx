// Import necessary modules and components from React Router and your local files
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutAuthor from './pages/AboutAuthor';
import BuyLinks from './pages/BuyLinks';
import Contact from './pages/Contact';
import './index.css';

function App() {
  // useLocation gives access to the current URL path
  const location = useLocation();

  // Determine if the current route is the Buy Links page
  // This is used to optionally change layout (e.g., exclude container padding)
  const isBuyPage = location.pathname === '/buy-links';

  return (
    <div className="app-container">
      {/* Navbar appears on all pages */}
      <Navbar />

      {/* Conditionally render layout based on page type */}
      {!isBuyPage ? (
        // Default layout with container padding for most pages
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-author" element={<AboutAuthor />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      ) : (
        // BuyLinks page has a different layout (no container padding)
        <Routes>
          <Route path="/buy-links" element={<BuyLinks />} />
        </Routes>
      )}

      {/* Footer is shared across all pages */}
      <Footer />
    </div>
  );
}

export default App;
