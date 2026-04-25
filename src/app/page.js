"use client";
import React, { useState } from "react";
// Direct Relative Paths
import { db } from "../lib/firebase";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import InternationalApplicationForm from "../components/InternationalApplicationForm";
// Line 4 & 5
import FlightBookingForm from "../components/FlightBookingForm";
import StudyAbroadPortal from "../components/StudyAbroadPortal";

export default function Home() {
  const countries = [
    {
      name: "UNITED KINGDOM",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000",
      flag: "🇬🇧",
      desc: "Healthcare & Skilled Worker",
      requirements: [
        "Valid International Passport",
        "IELTS/PTE Academic Result",
        "TB Test Certificate",
        "Job Offer / Certificate of Sponsorship (CoS)",
        "Police Clearance Certificate",
      ],
    },
    {
      name: "CANADA",
      image:
        "https://images.unsplash.com/photo-1517935703635-275d45d25171?q=80&w=1000",
      flag: "🇨🇦",
      desc: "Express Entry & Study Permits",
      requirements: [
        "WES Evaluation of Credentials",
        "Language Proficiency (IELTS/TEF)",
        "Proof of Funds (Bank Statement)",
        "Biometrics and Medical Report",
        "Admission Letter (for Students)",
      ],
    },
    {
      name: "AUSTRALIA",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000",
      flag: "🇦🇺",
      desc: "Work & Holiday Visas",
      requirements: [
        "Skill Assessment Result",
        "Health & Character Certificates",
        "Proof of Financial Support",
        "Relevant Work Experience Documentation",
        "English Language Competency",
      ],
    },
    {
      name: "JAPAN",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000",
      flag: "🇯🇵",
      desc: "Technical Intern Training",
      requirements: [
        "Certificate of Eligibility (COE)",
        "Basic Japanese Language (N5/N4 Level)",
        "Vocational Training Certification",
        "Medical Fitness Certificate",
        "Contract from Receiving Organization",
      ],
    },
    {
      name: "USA",
      image:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1000",
      flag: "🇺🇸",
      desc: "H-2B & Student Visas",
      requirements: [
        "Form I-20 or DS-2019",
        "SEVIS Fee Payment Receipt",
        "DS-160 Confirmation Page",
        "Interview Appointment Confirmation",
        "Financial Capability Documents",
      ],
    },
    {
      name: "SOUTH KOREA",
      image:
        "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=1000",
      flag: "🇰🇷",
      desc: "E-9 Visa Opportunities",
      requirements: [
        "EPS-TOPIK Exam Result",
        "Job Competency Assessment",
        "Valid Passport (Minimum 1 year)",
        "Standard Labor Contract",
        "Criminal Background Check",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      {/* --- 1. NAVIGATION BAR --- */}
      <nav className="bg-white border-b-2 border-orange-500 py-4 px-8 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-900 text-white w-10 h-10 flex items-center justify-center rounded-lg font-black italic">
            J
          </div>
          <span className="text-2xl font-black text-blue-900 italic tracking-tighter">
            JABBAMA TRAVELS
          </span>
        </div>
        <div className="hidden md:flex space-x-8 font-bold text-blue-900 text-sm">
          <a href="/" className="hover:text-orange-500">
            HOME
          </a>
          <a href="/jobs" className="hover:text-orange-500">
            JOBS ABROAD
          </a>
          <a href="/services" className="hover:text-orange-500">
            SERVICES
          </a>
          <a href="/contact" className="hover:text-orange-500">
            CONTACT
          </a>
        </div>
        <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-bold text-xs hover:bg-orange-600 transition-all">
          CLIENT LOGIN
        </button>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <header className="relative h-[85vh] flex items-center justify-center bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="relative z-20 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-black italic mb-4 drop-shadow-2xl">
            JABBAMA <span className="text-orange-500 italic">TRAVELS</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-bold tracking-[0.4em] mb-8 border-y-2 border-white/30 py-4 uppercase">
            Travels and Tours Limited
          </h2>
          <p className="text-lg md:text-xl font-medium mb-10 opacity-90 max-w-2xl mx-auto">
            Your gateway to the world. We provide professional visa assistance,
            work permits, and global travel solutions with integrity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-md font-black text-lg transition-transform hover:scale-105 shadow-xl">
              START APPLICATION
            </button>
            <button className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-4 rounded-md font-black text-lg hover:bg-white hover:text-blue-900 transition-all">
              OUR SERVICES
            </button>
          </div>
        </div>
      </header>

      {/* --- 3. SERVICES PREVIEW --- */}
      <section className="py-24 px-8 container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black text-blue-900 uppercase italic">
            What We Offer
          </h3>
          <div className="w-20 h-2 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Flight Bookings", icon: "✈️" },
            { title: "Visa Assistance", icon: "📄" },
            { title: "Hajj & Umrah", icon: "🕋" },
            { title: "Study Abroad", icon: "🎓" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border-b-8 border-blue-900 shadow-lg hover:-translate-y-2 transition-all text-center"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h4 className="text-xl font-black text-blue-900 uppercase">
                {s.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. FLIGHT BOOKING SECTION --- */}
      <section className="py-24 bg-gray-100 px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-blue-900 uppercase italic">
              Flight Reservations
            </h3>
            <p className="text-orange-600 font-bold tracking-widest mt-2 uppercase text-sm">
              Instant Domestic & International Booking
            </p>
          </div>
          <FlightBookingForm />
        </div>
      </section>

      {/* NEW STUDY ABROAD SECTION */}
      <section id="study-abroad" className="py-12 bg-white">
        <StudyAbroadPortal />
      </section>

      {/* --- 5. JOBS ABROAD SECTION --- */}
      <section className="py-24 bg-blue-900 px-8 relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl font-black text-white italic tracking-tighter">
                TOP DESTINATIONS
              </h2>
              <p className="text-orange-500 font-bold tracking-[0.3em] mt-2 uppercase">
                Global Work Opportunities
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {countries.map((c, idx) => (
              <div
                key={idx}
                className="group relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{c.flag}</span>
                    <div className="h-[2px] w-12 bg-orange-500"></div>
                  </div>
                  <h3 className="text-3xl font-black italic tracking-tighter mb-2 group-hover:text-orange-400 transition">
                    {c.name}
                  </h3>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-6">
                    {c.desc}
                  </p>
                  <button
                    onClick={() => setSelectedCountry(c)} // Logic to set the country
                    className="bg-white text-blue-900 font-black text-xs px-6 py-3 rounded-full uppercase tracking-tighter hover:bg-orange-500 hover:text-white transition shadow-xl"
                  >
                    View Requirements
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REQUIREMENTS MODAL */}
        {selectedCountry && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-blue-950/80 backdrop-blur-sm">
            <div className="bg-white w-full max-w-lg rounded-[40px] p-10 relative shadow-2xl border-t-[12px] border-orange-500">
              <button
                onClick={() => setSelectedCountry(null)}
                className="absolute top-6 right-8 text-blue-900 font-black text-2xl hover:text-orange-500"
              >
                ✕
              </button>
              <h3 className="text-3xl font-black text-blue-900 uppercase italic mb-2">
                {selectedCountry.flag} {selectedCountry.name}
              </h3>
              <p className="text-orange-600 font-bold uppercase text-xs tracking-widest mb-8 border-b pb-4">
                Mandatory Documentation
              </p>
              <ul className="space-y-4">
                {selectedCountry.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">▶</span>
                    <span className="text-blue-900 font-bold uppercase text-sm tracking-tight">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedCountry(null)}
                className="w-full mt-10 bg-blue-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 transition shadow-lg"
              >
                Close Requirements
              </button>
            </div>
          </div>
        )}
      </section>
      {/* --- 6. TESTIMONIALS --- */}
      <Testimonials />

      {/* --- 7. OFFICIAL PORTAL SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-blue-900 uppercase italic">
              Application Portal
            </h2>
            <p className="text-orange-600 font-bold tracking-widest mt-2 uppercase">
              Start Your Official Journey Here
            </p>
          </div>
          <InternationalApplicationForm />
        </div>
      </section>

      {/* --- 8. FOOTER --- */}
      <footer className="bg-white py-16 px-8 border-t-8 border-blue-900">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div>
            <h4 className="text-2xl font-black text-blue-900 italic">
              JABBAMA TRAVELS
            </h4>
            <p className="text-gray-500 font-bold max-w-sm mt-2">
              Yan Musa Plaza, Ring Road, Kano State, Nigeria.
            </p>
          </div>
          <div className="text-blue-900 font-black text-lg">
            <p className="hover:text-orange-500 transition cursor-pointer">
              +234 704 749 7491
            </p>
            <p className="hover:text-orange-500 transition cursor-pointer">
              +234 902 206 4702
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="opacity-40 text-xs font-bold uppercase tracking-widest mb-2">
              Developed for Jabbama Travels © 2026
            </div>
            <div className="text-blue-900 font-black text-sm uppercase">
              Global Standard Solutions
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
