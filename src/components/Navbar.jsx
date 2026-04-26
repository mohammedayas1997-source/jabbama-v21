"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b-2 border-orange-500 py-3 px-8 sticky top-0 z-[100] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO SECTION */}
        <Link
          href="/"
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="h-14 w-14 flex items-center justify-center overflow-hidden relative">
            <img
              src="/assets/logo.png"
              alt="Jabbama Travels Logo"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-2xl font-black text-blue-900 italic tracking-tighter leading-none uppercase">
              Jabbama Travels
            </span>
            <span className="text-[10px] font-black text-orange-600 tracking-[0.2em] uppercase leading-none mt-1">
              Travels and Tours Limited
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <div className="hidden md:flex items-center space-x-8 font-black text-blue-900 text-sm uppercase">
          <Link
            href="/"
            className="hover:text-orange-500 transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            href="#study-abroad"
            className="hover:text-orange-500 transition-colors relative group"
          >
            Study Abroad
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            href="#portal"
            className="hover:text-orange-500 transition-colors relative group"
          >
            Applications
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            href="#contact"
            className="hover:text-orange-500 transition-colors relative group"
          >
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            href="/dashboard"
            className="bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-orange-600 hover:shadow-orange-200 transition-all shadow-lg active:scale-95 flex items-center gap-2"
          >
            <span>Dashboard</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <div
          className="md:hidden bg-gray-100 p-2 rounded-lg text-blue-900 cursor-pointer hover:bg-orange-100 transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-white border-b-4 border-blue-900 shadow-2xl flex flex-col p-6 space-y-4 animate-in slide-in-from-top duration-300">
          <Link
            href="/"
            onClick={toggleMenu}
            className="text-blue-900 font-black uppercase text-lg border-b pb-2"
          >
            Home
          </Link>
          <Link
            href="#study-abroad"
            onClick={toggleMenu}
            className="text-blue-900 font-black uppercase text-lg border-b pb-2"
          >
            Study Abroad
          </Link>
          <Link
            href="#portal"
            onClick={toggleMenu}
            className="text-blue-900 font-black uppercase text-lg border-b pb-2"
          >
            Applications
          </Link>
          <Link
            href="#contact"
            onClick={toggleMenu}
            className="text-blue-900 font-black uppercase text-lg border-b pb-2"
          >
            Contact Us
          </Link>
          <Link
            href="/dashboard"
            onClick={toggleMenu}
            className="bg-blue-900 text-white text-center py-4 rounded-xl font-black uppercase shadow-lg active:scale-95"
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
