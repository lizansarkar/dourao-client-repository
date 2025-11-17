import React, { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/services", label: "Services" },
    { to: "/coverage", label: "Coverage" },
    { to: "/about", label: "About Us" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* === লোগো === */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img
                src="/logo-img/logo.png"
                alt="Dourao Logo"
                className="h-10 w-auto sm:h-12 md:h-12 object-contain transition-all duration-300"
              />
            </NavLink>
          </div>

          {/* === ডেক্সটপ মেনু === */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* === ডেক্সটপ: সাইন ইন / সাইন আপ === */}
          <div className="hidden md:flex items-center space-x-3">
            <NavLink
              to="/signin"
              className="px-4 py-2 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all flex items-center space-x-1"
            >
              <span>Sign Up</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </NavLink>
          </div>

          {/* === মোবাইল: হ্যামবার্গার আইকন === */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* === মোবাইল মেনু (ড্রপডাউন) === */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 z-50">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg font-medium transition-all"
              >
                {link.label}
              </NavLink>
            ))}

            {/* মোবাইলে সাইন ইন / সাইন আপ */}
            <div className="pt-4 pb-2 space-y-2 border-t border-gray-200">
              <NavLink
                to="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
