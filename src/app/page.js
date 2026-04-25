"use client";
import React, { useState, useEffect } from "react";

// Direct Relative Paths - Gyararru don Vercel
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import FlightBookingForm from "@/components/FlightBookingForm";
import StudyAbroadPortal from "@/components/StudyAbroadPortal";
import ApplicationForm from "@/components/ApplicationForm";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [
    "/assets/hero1.jpg",
    "/assets/hero2.jpg",
    "/assets/hero3.jpg",
    "/assets/hero4.jpg",
    "/assets/hero5.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

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

      {/* --- 2. HERO SECTION --- */}
      <header className="relative min-h-[95vh] flex items-center bg-white overflow-hidden py-16 px-4 md:px-12">
        {/* Background Gradient Decoration */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/80 via-transparent to-transparent z-0"></div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* TEXT CONTENT WITH GLASS BACKGROUND */}
          <div className="relative z-20 text-left space-y-8 p-6 md:p-12 rounded-[50px] bg-white/30 backdrop-blur-md border border-white/50 shadow-2xl lg:shadow-none lg:bg-transparent lg:backdrop-blur-none lg:border-none transition-all">
            <div className="inline-flex items-center gap-3 bg-orange-100 border border-orange-200 text-orange-600 px-6 py-2 rounded-full font-black text-[10px] tracking-[0.3em] uppercase shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              Official Travel Partner
            </div>

            <div className="space-y-4">
              <h1 className="text-7xl md:text-[110px] font-black italic text-blue-900 leading-[0.8] tracking-tighter drop-shadow-xl">
                JABBAMA <br />
                <span className="text-orange-500 not-italic inline-block transform -rotate-1">
                  TRAVELS
                </span>
              </h1>
              <div className="flex items-center gap-4 pt-2">
                <div className="h-[4px] w-24 bg-orange-500 rounded-full"></div>
                <h2 className="text-lg md:text-2xl font-black tracking-[0.3em] text-slate-500 uppercase">
                  Travels and Tours Limited
                </h2>
              </div>
            </div>

            <p className="text-lg md:text-2xl font-bold text-slate-700 max-w-xl leading-snug">
              Your gateway to the world. We provide{" "}
              <span className="text-blue-900 underline decoration-orange-500 decoration-4 underline-offset-4">
                professional visa assistance
              </span>
              , work permits, and global travel solutions with integrity.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <button
                onClick={() => setIsAppModalOpen(true)}
                className="bg-blue-900 hover:bg-orange-600 text-white px-12 py-6 rounded-[28px] font-black text-xl transition-all hover:scale-105 shadow-[0_20px_50px_rgba(30,58,138,0.4)] flex items-center gap-4 group"
              >
                START APPLICATION
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </button>

              <button className="bg-white border-4 border-blue-900 text-blue-900 px-10 py-5 rounded-[28px] font-black text-xl hover:bg-blue-900 hover:text-white transition-all shadow-xl active:scale-95">
                OUR SERVICES
              </button>
            </div>

            {/* Quick Stats / Trust Badges */}
            <div className="flex items-center gap-10 pt-10 border-t border-slate-200 mt-4">
              <div className="flex flex-col">
                <span className="font-black text-blue-900 text-3xl">IATA</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Certified Agency
                </span>
              </div>
              <div className="w-[2px] h-12 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="font-black text-blue-900 text-3xl">24/7</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Expert Support
                </span>
              </div>
            </div>
          </div>

          {/* IMAGE SLIDER */}
          <div className="relative h-[600px] md:h-[750px] w-full rounded-[70px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] border-[12px] border-white group">
            {heroImages.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  idx === currentHeroIndex
                    ? "opacity-100 scale-110"
                    : "opacity-0"
                }`}
              >
                <img
                  src={img}
                  alt={`Travel destination ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
              </div>
            ))}

            {/* Floating Info Card */}
            <div className="absolute top-12 right-12 bg-white/95 backdrop-blur-lg p-7 rounded-[35px] shadow-2xl z-30 border border-white hidden md:block animate-bounce-slow">
              <p className="text-blue-900 font-black text-xs uppercase mb-1 tracking-widest">
                Success Rate
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-orange-500">98%</span>
                <span className="text-[10px] font-bold text-slate-500 italic uppercase">
                  Visa Approval
                </span>
              </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
              {heroImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-3 rounded-full transition-all duration-500 ${idx === currentHeroIndex ? "w-16 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]" : "w-3 bg-white/60 hover:bg-white"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* --- REST OF THE SECTIONS STAY THE SAME --- */}
      {isAppModalOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-blue-950/90 backdrop-blur-md">
          <div className="bg-white w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-[40px] relative shadow-2xl border-t-[15px] border-orange-500">
            <button
              onClick={() => setIsAppModalOpen(false)}
              className="absolute top-6 right-8 z-[200] bg-red-600 text-white w-12 h-12 rounded-full font-black shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
            >
              ✕
            </button>
            <div className="p-2 md:p-8">
              <ApplicationForm />
            </div>
          </div>
        </div>
      )}

      {/* --- SERVICES PREVIEW --- */}
      <section className="py-24 px-8 container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-black text-blue-900 uppercase italic tracking-tighter">
            What We Offer
          </h3>
          <div className="w-24 h-2.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Flight Bookings", icon: "✈️" },
            { title: "Visa Assistance", icon: "📄" },
            { title: "Hajj & Umrah", icon: "🕋" },
            { title: "Study Abroad", icon: "🎓" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[35px] border-b-[10px] border-blue-900 shadow-xl hover:-translate-y-3 transition-all text-center group"
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h4 className="text-xl font-black text-blue-900 uppercase tracking-tight">
                {s.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* --- FLIGHT BOOKING SECTION --- */}
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

      {/* STUDY ABROAD SECTION */}
      <section id="study-abroad" className="py-12 bg-white">
        <StudyAbroadPortal />
      </section>

      {/* --- JOBS ABROAD SECTION --- */}
      <section className="py-24 bg-blue-900 px-8 relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-6xl font-black text-white italic tracking-tighter">
                TOP DESTINATIONS
              </h2>
              <p className="text-orange-500 font-bold tracking-[0.4em] mt-2 uppercase">
                Global Work Opportunities
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {countries.map((c, idx) => (
              <div
                key={idx}
                className="group relative h-[500px] rounded-[50px] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.03]"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/30 to-transparent opacity-95"></div>
                <div className="absolute bottom-12 left-10 right-10 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{c.flag}</span>
                    <div className="h-[3px] w-14 bg-orange-500"></div>
                  </div>
                  <h3 className="text-4xl font-black italic tracking-tighter mb-2 group-hover:text-orange-400 transition">
                    {c.name}
                  </h3>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-[0.2em] mb-8">
                    {c.desc}
                  </p>
                  <button
                    onClick={() => setSelectedCountry(c)}
                    className="bg-white text-blue-900 font-black text-xs px-8 py-4 rounded-full uppercase tracking-widest hover:bg-orange-500 hover:text-white transition shadow-2xl"
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-blue-950/80 backdrop-blur-md">
            <div className="bg-white w-full max-w-lg rounded-[50px] p-12 relative shadow-2xl border-t-[15px] border-orange-500 animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => setSelectedCountry(null)}
                className="absolute top-8 right-10 text-blue-900 font-black text-3xl hover:text-orange-500 transition-colors"
              >
                ✕
              </button>
              <h3 className="text-4xl font-black text-blue-900 uppercase italic mb-3">
                {selectedCountry.flag} {selectedCountry.name}
              </h3>
              <p className="text-orange-600 font-bold uppercase text-xs tracking-[0.3em] mb-10 border-b border-slate-100 pb-5">
                Mandatory Documentation
              </p>
              <ul className="space-y-5">
                {selectedCountry.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className="text-orange-500 font-black text-lg group-hover:translate-x-1 transition-transform">
                      ▶
                    </span>
                    <span className="text-blue-900 font-black uppercase text-sm tracking-tight leading-tight">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedCountry(null)}
                className="w-full mt-12 bg-blue-900 text-white py-5 rounded-[25px] font-black uppercase tracking-widest hover:bg-orange-600 transition shadow-lg active:scale-95"
              >
                Close Requirements
              </button>
            </div>
          </div>
        )}
      </section>

      <Testimonials />

      <section id="portal" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-blue-900 uppercase italic tracking-tighter">
              Application Portal
            </h2>
            <div className="w-20 h-2 bg-orange-500 mx-auto mt-4 mb-2"></div>
            <p className="text-orange-600 font-bold tracking-[0.3em] uppercase text-sm">
              Official International Placement Registration
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <ApplicationForm />
          </div>
        </div>
      </section>

      <footer className="bg-white py-20 px-8 border-t-[12px] border-blue-900">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-center text-center md:text-left">
          <div className="space-y-4">
            <h4 className="text-3xl font-black text-blue-900 italic tracking-tighter">
              JABBAMA TRAVELS
            </h4>
            <p className="text-slate-500 font-bold max-w-sm mt-2 leading-relaxed">
              Yan Musa Plaza, Ring Road, Kano State, Nigeria. <br />
              <span className="text-orange-500 uppercase text-xs tracking-widest">
                Headquarters Office
              </span>
            </p>
          </div>
          <div className="text-blue-900 font-black text-xl space-y-3">
            <p className="hover:text-orange-500 transition cursor-pointer flex items-center justify-center md:justify-start gap-3">
              <span className="text-2xl">📞</span> +234 704 749 7491
            </p>
            <p className="hover:text-orange-500 transition cursor-pointer flex items-center justify-center md:justify-start gap-3">
              <span className="text-2xl">📞</span> +234 902 206 4702
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="opacity-30 text-[10px] font-black uppercase tracking-[0.4em] mb-2">
              Jabbama Travels and Tours Ltd © 2026
            </div>
            <div className="text-blue-900 font-black text-sm uppercase tracking-widest border-b-2 border-orange-500 pb-1">
              Global Standard Solutions
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
