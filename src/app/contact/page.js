"use client";
import React from "react";
import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-black text-blue-900 mb-6 italic uppercase">
          Contact Us
        </h1>
        <div className="bg-blue-900 text-white p-12 rounded-[50px] shadow-2xl">
          <div className="space-y-8 italic">
            <div>
              <p className="text-orange-400 font-bold uppercase tracking-widest">
                Official Address
              </p>
              <p className="text-2xl font-black">
                Yan Musa Plaza, Ring Road, Kano State, Nigeria.
              </p>
            </div>
            <div>
              <p className="text-orange-400 font-bold uppercase tracking-widest">
                Support Lines
              </p>
              <p className="text-2xl font-black">+234 704 749 7491</p>
              <p className="text-2xl font-black">+234 902 206 4702</p>
            </div>
            <div className="pt-6 border-t border-white/20">
              <p className="font-bold tracking-widest">
                WWW.JABBAMATRAVELS.COM
              </p>
              <p className="text-[10px] mt-2 opacity-50 uppercase not-italic font-bold">
                Available Monday - Saturday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
