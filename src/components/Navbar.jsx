import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b-2 border-orange-500 py-4 px-8 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div className="flex items-center space-x-2">
        <div className="bg-blue-900 text-white w-10 h-10 flex items-center justify-center rounded-lg font-black italic text-xl">
          J
        </div>
        <span className="text-2xl font-black text-blue-900 italic tracking-tighter">
          JABBAMA TRAVELS
        </span>
      </div>
      <div className="hidden md:flex space-x-8 font-bold text-blue-900 text-sm uppercase">
        <a href="/" className="hover:text-orange-500 transition">
          Home
        </a>
        <a href="/jobs" className="hover:text-orange-500 transition">
          Jobs Abroad
        </a>
        <a
          href="/dashboard"
          className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition shadow-lg"
        >
          Login
        </a>
      </div>
    </nav>
  );
}
