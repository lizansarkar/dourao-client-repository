import React, { useState } from "react";
import { NavLink } from "react-router";
import UseAuth from "../../hooks/UseAuth";

const AuthActionButtons = ({ user, logOut, setMobileMenuOpen }) => {
  const profileBorderColor = "border-[#CAEB66]";
  const profileHoverRing = "hover:ring-[#CAEB66]";

  if (user) {
    return (
      <div className="flex items-center space-x-3">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar p-0"
          >
            <div
              className={`w-10 rounded-full border-2 ${profileBorderColor} ${profileHoverRing} transition-all overflow-hidden`}
            >
              <img
                alt={user.displayName || "User Profile"}
                src={
                  user.photoURL || "https://i.ibb.co/Ld1111S/default-user.png"
                }
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow-lg bg-white rounded-xl w-40 border border-gray-100"
          >
            <li>
              <NavLink
                to="/profile"
                className="text-gray-700 hover:text-black transition-colors py-2"
                onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => {
                  logOut();
                  setMobileMenuOpen && setMobileMenuOpen(false);
                }}
                className="text-red-500 font-semibold hover:bg-red-50 hover:text-red-600 transition-colors py-2 w-full text-left"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <NavLink
        to="/login"
        onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
        className="px-4 py-2 text-gray-700 font-medium hover:text-black transition-all"
      >
        Sign In
      </NavLink>
      <NavLink
        to="/rider"
        className="px-8 py-3 bg-[#BDEE58] text-[#003d3d] font-bold rounded-full shadow-sm hover:shadow-lg transform hover:scale-[1.03] transition-all flex items-center space-x-2"
      >
        <span>Be A Rider</span>
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
  );
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logOut } = UseAuth();

  const navLinks = (
    <ul className="flex flex-col md:flex-row items-center md:space-x-10 space-y-4 md:space-y-0 text-[16px]">
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `nav-link-style ${isActive ? "active" : ""}`
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/coverage"
          className={({ isActive }) =>
            `nav-link-style ${isActive ? "active" : ""}`
          }
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-link-style ${isActive ? "active" : ""}`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            `nav-link-style ${isActive ? "active" : ""}`
          }
        >
          Pricing
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/send-percel"
              className={({ isActive }) =>
                `nav-link-style ${isActive ? "active" : ""}`
              }
            >
              Send Parcel
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-parcels"
              className={({ isActive }) =>
                `nav-link-style ${isActive ? "active" : ""}`
              }
            >
              My Parcels
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );

  return (
    <nav className="container rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all">
      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img
                src="/logo-img/logo.png"
                alt="Dourao Logo"
                className="h-10 w-auto sm:h-12 object-contain"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">{navLinks}</div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center">
            <AuthActionButtons user={user} logOut={logOut} />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            {user && (
              <div className="w-8 h-8 rounded-full border-2 border-[#CAEB66] overflow-hidden">
                <img
                  alt="User"
                  src={
                    user.photoURL || "https://i.ibb.co/Ld1111S/default-user.png"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 p-2 rounded-lg hover:bg-gray-100"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-6">
            <div className="flex flex-col items-center">{navLinks}</div>
            <div className="pt-6 border-t border-gray-100">
              <AuthActionButtons
                user={user}
                logOut={logOut}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
