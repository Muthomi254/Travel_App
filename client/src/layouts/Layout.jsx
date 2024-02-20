// Layout.jsx

import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Import the Footer component

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} closeNavbar={closeNavbar} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Layout;
