import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="container rounded-2xl bg-gray-50 text-secondary py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer grid-cols-1 md:grid-cols-4 gap-10">
          <aside className="space-y-6">
            <NavLink to="/">
              <img
                src="/logo-img/logo.png"
                alt="Dourao Logo"
                className="h-10 w-auto object-contain"
              />
            </NavLink>
            <div className="space-y-2">
              <p className="font-bold text-gray-900">Dourao Delivery Ltd.</p>
              <p className="text-sm text-gray-500">
                Providing reliable tech since 2024
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/lizan-sarkar-707042393/"
                className="p-2 bg-gray-200 rounded-lg hover:bg-black transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/lizansarkar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 rounded-lg hover:bg-[#24292e] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://x.com/LizanIslam35436"
                className="p-2 bg-gray-200 rounded-lg hover:bg-black hover:text-white transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-gray-200 rounded-lg hover:bg-black hover:text-white transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.494v-9.294H9.689v-3.622h3.129V8.408c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.324C24 .593 23.407 0 22.676 0z" />
                </svg>
              </a>
            </div>
          </aside>

          <nav>
            <h6 className="footer-title text-gray-900 opacity-100">Services</h6>
            <NavLink
              to="/services"
              className="link link-hover text-gray-500 hover:text-black"
            >
              Branding
            </NavLink>
            <NavLink
              to="/services"
              className="link link-hover text-gray-500 hover:text-black"
            >
              Design
            </NavLink>
            <NavLink
              to="/services"
              className="link link-hover text-gray-500 hover:text-black"
            >
              Marketing
            </NavLink>
            <NavLink
              to="/services"
              className="link link-hover text-gray-500 hover:text-black"
            >
              Advertisement
            </NavLink>
          </nav>

          {/* === কলাম ৩: কোম্পানি === */}
          <nav>
            <h6 className="footer-title text-gray-900 opacity-100">Company</h6>
            <NavLink
              to="/about"
              className="link link-hover text-gray-500 hover:text-black"
            >
              About us
            </NavLink>
            <NavLink
              to="/contact"
              className="link link-hover text-gray-500 hover:text-black"
            >
              Contact
            </NavLink>
            <NavLink
              to="/jobs"
              className="link link-hover text-gray-500 hover:text-black"
            >
              Jobs
            </NavLink>
            <NavLink
              to="/press"
              className="link link-hover text-gray-500 hover:text-black"
            >
              Press kit
            </NavLink>
          </nav>

          {/* === কলাম ৪: লিগ্যাল === */}
          <nav>
            <h6 className="footer-title text-gray-900 opacity-100">Legal</h6>
            <NavLink
              to="/terms"
              className="link link-hover text-gray-500 hover:text-black"
            >
              Terms of use
            </NavLink>
            <NavLink
              to="/privacy"
              className="link link-hover text-gray-500 hover:text-black"
            >
              Privacy policy
            </NavLink>
            <NavLink
              to="/cookie"
              className="link link-hover text-gray-500 hover:text-black"
            >
              Cookie policy
            </NavLink>
          </nav>
        </div>

        {/* নিচের কপিরাইট টেক্সট */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Dourao. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
