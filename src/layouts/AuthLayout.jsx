import React from "react";

import authImage from "../assets/authImage.png"; 
import { NavLink, Outlet } from "react-router";

const logoPath = "/logo-img/logo.png";

export default function AuthLayout() {
  return (

    <div className="min-h-screen bg-[#F5F9ED] p-4 sm:p-8 lg:p-0">
      <div className="max-w-7xl mx-auto">
        
        <header className="py-4 sm:py-6 lg:px-4">
            <NavLink to="/" className="flex items-center">
              <img
                src={logoPath}
                alt="Dourao Logo"
                className="h-10 w-auto sm:h-12 md:h-12 object-contain transition-all duration-300"
              />
            </NavLink>
        </header>
        
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-100px)]">
          
          {/* বাম কলাম: ফর্ম কন্টেন্ট (আউটলেট) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-12">
            {/* আউটলেট এর মাধ্যমে Register.jsx বা Login.jsx কম্পোনেন্ট লোড হবে */}
            <div className="w-full max-w-md">
              <Outlet></Outlet>
            </div>
          </div>
          
          {/* ডান কলাম: গ্রাফিক্স/ইমেজ */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-transparent p-4">
            {/* ইমেজটি পুরো ডান কলাম জুড়ে থাকবে */}
            <img 
              src={authImage} 
              alt="Delivery Graphic" 
              className="w-full max-w-xl object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}