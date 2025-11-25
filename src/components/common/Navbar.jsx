import React, { useState } from "react";
import { Navigate, NavLink } from "react-router";
import UseAuth from "../../hooks/UseAuth";

const AuthActionButtons = ({ user, logOut, setMobileMenuOpen }) => {
  const profileBorderColor = "border-[#CAEB66]";
  const profileHoverRing = "hover:ring-[#CAEB66]";

  // If user is logged in, show Profile and Logout
  if (user) {
    return (
      <div className="flex items-center space-x-3">
        {/* User Profile Avatar with Dropdown Menu */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar p-0"
          >
            <div
              className={`w-10 rounded-full border-2 ${profileBorderColor} ${profileHoverRing} transition-all overflow-hidden`}
            >
              {/* Firebase User অবজেক্টের photoURL ব্যবহার করা হয়েছে, fallback সহ */}
              <img
                alt={user.displayName || "User Profile"}
                src={
                  user.photoURL || "https://i.ibb.co/Ld1111S/default-user.png"
                }
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Dropdown Menu - Tailwind/DaisyUI style */}
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
                  setMobileMenuOpen && setMobileMenuOpen(false); // Log out and close mobile menu
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

  // If no user is logged in, show Sign In and Sign Up buttons
  return (
    <>
      <NavLink
        to="/login"
        onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
        className="px-4 py-2 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition-all"
      >
        Sign In
      </NavLink>
      <NavLink
        to="/rider"
        className="px-5 py-2 bg-[#BDEE58] text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all flex items-center space-x-1"
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
    </>
  );
};

// === Main Navbar Component ===
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // logOut ফাংশনটি UseAuth থেকে নেওয়া হলো
  const { user, logOut } = UseAuth();

  // const navLinks = [
  //   { to: "/services", label: "Services" },
  //   { to: "/coverage", label: "Coverage" },
  //   { to: "/about", label: "About Us" },
  //   { to: "/pricing", label: "Pricing" },
  //   { to: "/blog", label: "Blog" },
  //   { to: "/contact", label: "Contact" },
  // ];

  const navLinks = (
    <>
      <li>
        <NavLink to="services">Services</NavLink>
      </li>
      <li>
        <NavLink to="coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="rider">Be a Rider</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/send-percel">Send Parcel</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-parcels">My Parcels</NavLink>
          </li>
        </>
      )}
    </>
  );

  // Mobile Menu বন্ধ করার জন্য একটি সাধারণ ফাংশন
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
            {navLinks}
          </div>

          {/* === ডেক্সটপ: Auth Actions (Conditional) === */}
          <div className="hidden md:flex items-center space-x-3">
            <AuthActionButtons user={user} logOut={logOut} />
          </div>

          {/* === মোবাইল: হ্যামবার্গার আইকন এবং ইউজার আইকন === */}
          <div className="md:hidden flex items-center space-x-3">
            {/* User Avatar on Mobile Nav if logged in (Mini version) */}
            {user && (
              <div className="w-8 h-8 rounded-full border-2 border-[#CAEB66] overflow-hidden">
                <img
                  alt={user.displayName || "User Profile"}
                  src={
                    user.photoURL || "https://i.ibb.co/Ld1111S/default-user.png"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none p-1 rounded-md hover:bg-gray-100 transition-colors"
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
        <div className="md:hidden bg-white border-t border-gray-100 z-40 shadow-xl pb-2">
          <div className="px-4 py-3 space-y-2">
            {/* ন্যাভিগেশন লিঙ্কসমূহ */}

            {navLinks}

            {/* মোবাইল: Auth Actions (Conditional - Profile/Logout or Sign In/Sign Up) */}
            <div className="pt-4 pb-2 space-y-2 border-t border-gray-200">
              {user ? (
                // LOGGED IN: Profile and Logout Buttons
                <>
                  {/* Profile Link */}
                  <NavLink
                    to="/profile"
                    onClick={closeMobileMenu}
                    className="block w-full text-center px-4 py-2 bg-[#CAEB66] text-gray-900 font-medium rounded-lg hover:bg-[#BDEE58] transition-all"
                  >
                    Hello, {user.displayName || "User"} (Profile)
                  </NavLink>

                  {/* Log Out Button (মোবাইলের জন্য যোগ করা হলো) */}
                  <button
                    onClick={() => {
                      logOut();
                      closeMobileMenu(); // Logout and close menu
                    }}
                    className="block w-full text-center px-4 py-2 text-red-600 font-semibold border border-red-500 rounded-lg hover:bg-red-50 transition-all"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                // LOGGED OUT: Sign In and Sign Up Buttons
                <>
                  <NavLink
                    to="/login"
                    onClick={closeMobileMenu}
                    className="block w-full text-center px-4 py-2 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="/register"
                    onClick={closeMobileMenu}
                    className="block w-full text-center px-4 py-2 bg-[#BDEE58] text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-lg"
                  >
                    Sign Up
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
