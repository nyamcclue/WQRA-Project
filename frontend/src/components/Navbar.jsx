// SimpleTransparentNavbar.jsx
import React, { useEffect, useState } from 'react';
import './Navbar.css';

const SimpleTransparentNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setMenuVisible(true);
    } else {
      const timeout = setTimeout(() => setMenuVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  return (
    <div className="relative">
      <div
        aria-hidden
        className={`overlay ${menuOpen ? 'show' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-transparent z-50">
        <img src="/whitelogo.png" alt="Left Logo" className="h-10" />

        <div className="relative z-50">
          <img
            src="/hamburger.png"
            alt="Right Logo"
            className="h-10 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {menuVisible && (
            <div
              className={`absolute right-0 mt-2 w-48 bg-white rounded shadow-lg p-4 text-sm space-y-2 dropdown-panel ${menuOpen ? 'show' : 'hide'}`}
            >
              <a href="#map" className="block hover:underline">Jump to The Map</a>
              {/* <a href="#about" className="block hover:underline">Meet The Team</a> */}
              {/* <a href="#contaminates" className="block hover:underline">Contaminate Information</a> */}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default SimpleTransparentNavbar;
