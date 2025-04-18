import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import { Board } from './components/Board';
import { Donate } from './components/Donate';
import { Contact } from './components/Contact';
import { AlphaChapter } from './components/AlphaChapter';
import { NotFound } from './components/NotFound';

const App = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const navyBlueHex = "#001f3f";
  const darkGrayHex = "#363939";

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <Router>
      {/* <div className="min-h-screen" style={{ backgroundColor: darkGrayHex }}> */}
      <div className="min-h-screen bg-primary-gray">
        {/* Top Banner */}
        {/* <nav className="text-white p-4" style={{ backgroundColor: navyBlueHex }}> */}
        <nav className="text-white p-4 bg-primary-blue">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src="/DRho Logo.png" alt="Delta Rho Sigma Logo" className="h-8" />
              <Link to="/" className="text-2xl font-bold">DELTA RHO SIGMA</Link>
            </div>
            <div className="space-x-4 flex items-center">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="hover:underline focus:outline-none"
                >
                  Chapters
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10">
                    <Link
                      to="/alpha-chapter"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Alpha Chapter
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/board" className="hover:underline">Board</Link>
              <a href="https://www.paypal.com/donate/?hosted_button_id=B6W6KF5SJTVS6" className="hover:underline" target="_blank" rel="noopener noreferrer">Donate</a>
              <Link to="/contact" className="hover:underline">Contact us</Link>
            </div>
          </div>
        </nav>

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/alpha-chapter" element={<AlphaChapter />} />
          {/* <Route path="/beta-chapter" element={<BetaChapter />} /> */}
          <Route path="/board" element={<Board />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        {/* <footer className="text-white p-4 mt-8" style={{ backgroundColor: navyBlueHex }}> */}
        <footer className="p-4 mt-8 text-brand-primary bg-primary-blue">
          <div className="container mx-auto flex justify-between items-center">
            <div className="logo">
              <img src="/DRho Logo.png" alt="Delta Rho Sigma Logo" className="h-8 text-brand-primary" />
            </div>
            <div className="text-right text-white">
              <p>&copy; 2025 Delta Rho Sigma. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
