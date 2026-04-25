"use client";
import React from "react";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <div className="max-w-4xl mx-auto py-16 px-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-blue-900 p-8 text-white">
            <h2 className="text-3xl font-black italic uppercase">
              Client Portal
            </h2>
            <p className="opacity-70 font-bold">
              Track your application status and documents
            </p>
          </div>
          <div className="p-8">
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center">
              <p className="text-gray-400 font-bold mb-4 uppercase italic">
                Enter your Passport Number or Application ID
              </p>
              <input
                type="text"
                placeholder="Example: A01234567"
                className="w-full max-w-md border-2 border-blue-900 p-4 rounded-xl mb-6 text-center text-xl font-bold uppercase focus:outline-none focus:ring-4 focus:ring-orange-100"
              />
              <button className="w-full max-w-md bg-orange-500 text-white py-4 rounded-xl font-black text-lg hover:bg-orange-600 shadow-xl transition">
                CHECK STATUS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
