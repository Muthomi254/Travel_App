import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => { // Destructure children from props
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} closeNavbar={closeNavbar} />
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children} {/* Render children components here */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
