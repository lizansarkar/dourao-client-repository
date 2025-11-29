import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* === লোগো + টেক্সট === */}
          <div className="flex flex-col items-center space-y-4">
            <NavLink to="/" className="flex items-center">
              <img
                src="/logo-img/footer-logo.png"
                alt="Dourao Logo"
                className="h-10 w-auto sm:h-12 md:h-12 object-contain transition-all duration-300"
              />
            </NavLink>

            <p className="text-sm max-w-2xl text-gray-400 leading-relaxed">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>
          </div>

          {/* === ডিভাইডার লাইন === */}
          <div className="w-full max-w-md border-t border-gray-700"></div>

          {/* === মেনু লিংক === */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium">
            <NavLink
              to="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </NavLink>
            <NavLink
              to="/coverage"
              className="hover:text-white transition-colors"
            >
              Coverage
            </NavLink>
            <NavLink to="/about" className="hover:text-white transition-colors">
              About Us
            </NavLink>
            <NavLink
              to="/pricing"
              className="hover:text-white transition-colors"
            >
              Pricing
            </NavLink>
            <NavLink to="/blog" className="hover:text-white transition-colors">
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </NavLink>
          </nav>

          {/* === সোশ্যাল আইকন === */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="w-10 h-10 bg-linkedin-blue rounded-full flex items-center justify-center hover:bg-blue-700 transition-all"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all"
              aria-label="X (Twitter)"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="#"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.494v-9.294H9.689v-3.622h3.129V8.408c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.324C24 .593 23.407 0 22.676 0z" />
              </svg>
            </a>

            <a
              href="#"
              className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all"
              aria-label="YouTube"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.75 15.02l-.001-6.04 5.823 3.021-5.822 3.019z" />
              </svg>
            </a>
          </div>

          {/* === কপিরাইট === */}
          <p className="text-xs text-gray-500 mt-8">
            © 2025 ZapShift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
