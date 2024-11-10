"use client";
import React, { useState } from 'react';
import { Shield, Globe, Code, Database, Phone, Users } from 'lucide-react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
const ServicesPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <>
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive range of IT solutions to help your business grow and succeed in the digital world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Globe className="w-6 h-6 text-blue-900" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Web Development</h3>
          <p className="text-gray-600 leading-relaxed">
            Custom website development using the latest technologies and frameworks to create responsive and user-friendly web applications.
          </p>
          <button className="mt-4 text-blue-900 font-medium flex items-center hover:text-blue-700">
            Learn More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Code className="w-6 h-6 text-blue-900" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Mobile App Development</h3>
          <p className="text-gray-600 leading-relaxed">
            Native and cross-platform mobile application development for iOS and Android platforms with modern user interfaces.
          </p>
          <button className="mt-4 text-blue-900 font-medium flex items-center hover:text-blue-700">
            Learn More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Database className="w-6 h-6 text-blue-900" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Cloud Solutions</h3>
          <p className="text-gray-600 leading-relaxed">
            Scalable cloud infrastructure setup and management using AWS, Azure, or Google Cloud with optimal performance.
          </p>
          <button className="mt-4 text-blue-900 font-medium flex items-center hover:text-blue-700">
            Learn More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Service Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-blue-900" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Cyber Security</h3>
          <p className="text-gray-600 leading-relaxed">
            Comprehensive security solutions including penetration testing, security audits, and implementation of security measures.
          </p>
          <button className="mt-4 text-blue-900 font-medium flex items-center hover:text-blue-700">
            Learn More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Service Card 5 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-blue-900" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">IT Consulting</h3>
          <p className="text-gray-600 leading-relaxed">
            Strategic IT consulting services to help businesses optimize their technology infrastructure and processes.
          </p>
          <button className="mt-4 text-blue-900 font-medium flex items-center hover:text-blue-700">
            Learn More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Service Card 6 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Phone className="w-6 h-6 text-blue-900" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">24/7 Support</h3>
          <p className="text-gray-600 leading-relaxed">
            Round-the-clock technical support and maintenance services to ensure your systems run smoothly.
          </p>
          <button className="mt-4 text-blue-900 font-medium flex items-center hover:text-blue-700">
            Learn More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center bg-blue-900 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Contact us today to discuss how we can help transform your business.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
          <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
            View Pricing
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServicesPage;