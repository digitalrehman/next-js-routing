"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="relative">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-blue-900">GIAIC</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>

              <div className="relative" onMouseLeave={() => setIsDropdownOpen(false)}>
                <button
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 -ml-4 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-2" role="menu">
                      <Link href="/services/web" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Web Development
                      </Link>
                      <Link href="/services/mobile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Mobile Development
                      </Link>
                      <Link href="/services/cloud" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Cloud Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="./services" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link href="/login" className="bg-blue-900 text-white hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50">
                Home
              </Link>
              <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50">
                Services
              </Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50">
                Contact
              </Link>
              <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-900 text-white hover:bg-blue-800">
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Business</span>
              <span className="block text-blue-200">With Digital Solutions</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We help businesses grow by providing innovative digital solutions tailored to their needs.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <Link href="/contact" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 sm:px-8">
                  Get Started
                </Link>
                <Link href="/services" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;