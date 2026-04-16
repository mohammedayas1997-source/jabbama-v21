import React from "react";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import ApplicationForm from "../components/ApplicationForm";
import JobApplicationForm from "../components/JobApplicationForm";

export default function Home() {
  const countries = [
    {
      name: "UNITED KINGDOM",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000",
      flag: "🇬🇧",
      desc: "Healthcare & Skilled Worker",
    },
    {
      name: "CANADA",
      image:
        "https://images.unsplash.com/photo-1517935703635-275d45d25171?q=80&w=1000",
      flag: "🇨🇦",
      desc: "Express Entry & Study Permits",
    },
    {
      name: "AUSTRALIA",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000",
      flag: "🇦🇺",
      desc: "Work & Holiday Visas",
    },
    {
      name: "JAPAN",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000",
      flag: "🇯🇵",
      desc: "Technical Intern Training",
    },
    {
      name: "USA",
      image:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1000",
      flag: "🇺🇸",
      desc: "H-2B & Student Visas",
    },
    {
      name: "SOUTH KOREA",
      image:
        "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=1000",
      flag: "🇰🇷",
      desc: "E-9 Visa Opportunities",
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

      {/* --- 4. JOBS ABROAD SECTION (WITH IMAGES) --- */}
      <section className="py-24 bg-blue-900 px-8">
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
            <button className="hidden md:block border-b-4 border-orange-500 font-black text-white pb-1 hover:text-orange-500 transition uppercase text-sm">
              Explore All Countries
            </button>
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
                  <button className="bg-white text-blue-900 font-black text-xs px-6 py-3 rounded-full uppercase tracking-tighter hover:bg-orange-500 hover:text-white transition shadow-xl">
                    View Requirements
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4.5 TESTIMONIALS SECTION --- */}
      <section className="py-24 bg-gray-50 px-8 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-blue-900 uppercase italic">
              What Our Clients Say
            </h3>
            <p className="text-orange-500 font-bold tracking-widest mt-2 uppercase">
              Success Stories from Around the Globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Musa Ibrahim",
                location: "UK (Healthcare)",
                text: "Jabbama Travels made my dream of working in the UK a reality. Their process was transparent and fast!",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
              },
              {
                name: "Fatima Yusuf",
                location: "Canada (Student)",
                text: "Highly professional service. They handled my study permit with so much care. I'm now in Toronto!",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9ce29b2933?q=80&w=200",
              },
              {
                name: "Abba Kyari",
                location: "Japan (Technical)",
                text: "The best travel agency in Kano. My visa to Japan was processed without any stress. Highly recommended!",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[40px] shadow-xl border-t-8 border-orange-500 relative"
              >
                <div className="absolute -top-6 left-10 w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 italic font-medium mt-6 mb-6">
                  "{t.text}"
                </p>
                <h4 className="font-black text-blue-900 uppercase tracking-tighter">
                  {t.name}
                </h4>
                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest">
                  {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <ApplicationForm />
      <JobApplicationForm />

      {/* --- 5. FOOTER --- */}
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
