// src/components/AuthLayout.jsx

import React from "react";

// ধরে নিচ্ছি এটি আপনার ইমেজ ফাইল (আপনাকে এটি আপনার assets ফোল্ডারে রাখতে হবে)
import authImage from "../assets/authImage.png"; 
import { Outlet } from "react-router";

// ধরে নিচ্ছি এটি আপনার লোগো ফাইল
const logoPath = "/logo-img/logo.png"; // এটি আপনার পাবলিক ফোল্ডার থেকে লোড হবে

export default function AuthLayout() {
  return (
    // মূল কন্টেইনার: পুরো স্ক্রিন হাইট, হালকা সবুজ ব্যাকগ্রাউন্ড
    <div className="min-h-screen bg-[#F5F9ED] p-4 sm:p-8 lg:p-0">
      <div className="max-w-7xl mx-auto">
        
        {/* লোগো সেকশন: ছবির মতো উপরের বাম কোণে */}
        <header className="py-4 sm:py-6 lg:px-4">
          {/* লোগো ইমেজটি আপনার রুট বা পাবলিক ফোল্ডারে 'logo-img/logo.png' পথে থাকতে হবে */}
          <img 
            src={logoPath} 
            alt="ZapShift Logo" 
            className="w-28 sm:w-36 h-auto" 
            // ছবির মতো ZapShift লোগোর উচ্চতা অ্যাডজাস্ট করা
          />
        </header>
        
        {/* কন্টেন্ট কন্টেইনার: দুটি কলাম (রেজিস্ট্রেশন/লগইন ফর্ম + ইমেজ) */}
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