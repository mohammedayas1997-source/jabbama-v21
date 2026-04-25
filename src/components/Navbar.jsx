"use client"; // Wannan layin shine zai hana kuskuren build din
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b-2 border-orange-500 py-3 px-8 flex justify-between items-center sticky top-0 z-[100] shadow-md">
      {/* LOGO SECTION */}
      <div className="flex items-center space-x-3">
        {/* Wannan shine wurin Logo dinka */}
        <div className="h-14 w-14 flex items-center justify-center overflow-hidden">
          <img
            src="/logo.png"
            alt="Jabbama Travels Logo"
            className="w-full h-full object-contain"
            // Na cire onError din tukunna domin mu tabbatar hoton yana nunawa
            // Idan hoton bai fito ba, duba sunan file din a public folder (dole ya zama logo.png)
          />
        </div>

        <div className="flex flex-col">
          <span className="text-2xl font-black text-blue-900 italic tracking-tighter leading-none">
            JABBAMA TRAVELS
          </span>
          <span className="text-[10px] font-bold text-orange-600 tracking-[0.2em] uppercase leading-none">
            Travels and Tours Limited
          </span>
        </div>
      </div>

      {/* NAVIGATION LINKS */}
      <div className="hidden md:flex items-center space-x-8 font-black text-blue-900 text-sm uppercase">
        <a href="/" className="hover:text-orange-500 transition-colors">
          Home
        </a>
        <a
          href="#study-abroad"
          className="hover:text-orange-500 transition-colors"
        >
          Study Abroad
        </a>
        <a href="#portal" className="hover:text-orange-500 transition-colors">
          Applications
        </a>
        <a
          href="/dashboard"
          className="bg-blue-900 text-white px-8 py-2.5 rounded-xl hover:bg-orange-600 transition-all shadow-lg active:scale-95"
        >
          Login
        </a>
      </div>

      {/* MOBILE MENU ICON (Optional) */}
      <div className="md:hidden text-blue-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </nav>
  );
}
