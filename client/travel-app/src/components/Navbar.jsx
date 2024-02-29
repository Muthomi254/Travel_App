import React, { useState } from 'react';
import { FaPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} fixed-top w-full`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-lg font-bold flex items-center">
              Travel <div><FaPlane className='text-black text-4xl mx-2' /></div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900 hover:bg-gray-800 hover:text-white'}`}>Home</Link>
              <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900 hover:bg-gray-800 hover:text-white'}`}>About</Link>
              <div className="relative">
                <button onMouseEnter={toggleNavbar} className={`px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900 hover:bg-gray-800 hover:text-white'} focus:outline-none`}>
                  Services
                  <svg className="h-5 w-5 inline-block ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l4 4a1 1 0 11-1.414 1.414L10 5.414 7.707 7.707a1 1 0 11-1.414-1.414l4-4A1 1 0 0110 3z" clipRule="evenodd" />
                  </svg>
                </button>
                {isOpen && (
                  <div onMouseLeave={closeNavbar} className="absolute left-0 mt-2 w-56 origin-top-left bg-gray-900 rounded-md shadow-lg">
                    <div className="py-1 font-bold">
                      <Link to="/restaurants" className="text-gray-800 hover:bg-gray-800 hover:text-white block px-4 py-2 text-sm" onClick={closeNavbar}>Restaurants</Link>
                      <Link to="/transport" className="text-gray-800 hover:bg-gray-800 hover:text-white block px-4 py-2 text-sm" onClick={closeNavbar}>Flights </Link>
                      <Link to="/transport" className="text-gray-800 hover:bg-gray-800 hover:text-white block px-4 py-2 text-sm" onClick={closeNavbar}>Buses</Link>
                    </div>
                  </div>
                )}
              </div>
              <div className='mx-10'>
                <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'text-gray-900 dark:text-white hover:bg-gray-800 bg-orange-600 shadow-xl transition hover:text-black hover:bg-white' : 'text-gray-900 dark:text-white hover:bg-black  hover:text-white'}`}>Get in touch</Link>
                <Link to="/login" className={`px-3 py-2 rounded-md text-sm mx-3 ${theme === 'dark' ? 'text-gray-900 dark:text-white hover:bg-black  hover:text-white' : 'text-gray-900 dark:text-white hover:bg-gray-800 hover:text-white'}`}>login</Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className={`inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-800 focus:outline-none`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className={`px-3 py-2 rounded-md text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-900 hover:bg-gray-800 hover:text-white'}`}>Home</Link>
          <Link to="/about" className={`px-3 py-2 rounded-md text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-900 hover:bg-gray-800 hover:text-white'}`}>About</Link>
          <div className="relative">
            <button onClick={toggleNavbar} className={`px-3 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-900 hover:bg-gray-800 hover:text-white'} focus:outline-none`}>
              Services
              <svg className="h-5 w-5 inline-block ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l4 4a1 1 0 11-1.414 1.414L10 5.414 7.707 7.707a1 1 0 11-1.414-1.414l4-4A1 1 0 0110 3z" clipRule="evenodd" />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-56 origin-top-left bg-gray-900 rounded-md shadow-lg">
                <div className="py-1">
                  <Link to="/restaurants" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-900 hover:bg-gray-800 hover:text-white'}`} onClick={closeNavbar}>Restaurants</Link>
                  <Link to="/transport" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-900 hover:bg-gray-800 hover:text-white'}`} onClick={closeNavbar}>Flights </Link>
                  <Link to="/buses" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-900 hover:bg-gray-800 hover:text-white'}`} onClick={closeNavbar}>Buses</Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/contact" className={`px-3 py-2 rounded-md text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-900 hover:bg-gray-800 hover:text-white'}`}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

