"use client";
import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function StudyAbroadPortal() {
  const [loading, setLoading] = useState(false);

  const studyDestinations = [
    {
      country: "United Kingdom",
      levels: "MSc, PhD, Top-up",
      intake: "Sept/Jan",
    },
    {
      country: "Canada",
      levels: "Diploma, Degree, Masters",
      intake: "Fall/Winter",
    },
    { country: "Cyprus", levels: "BSc, Masters", intake: "Feb/Oct" },
    {
      country: "Turkey",
      levels: "Full Scholarship, Medicine",
      intake: "Annual",
    },
    { country: "USA", levels: "SAT/GRE Entry, BSc", intake: "Rolling" },
    {
      country: "Malaysia",
      levels: "Affordable BSc, MSc",
      intake: "Multi-intake",
    },
  ];

  const [formData, setFormData] = useState({
    fullName: "Abdulrahman Mohammed",
    email: "",
    phone: "",
    preferredCountry: "",
    courseOfStudy: "",
    lastQualification: "Degree",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "study_abroad_apps"), {
        ...formData,
        submittedAt: new Date(),
        status: "Pending Review",
      });
      alert("Education Counseling Request Submitted!");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto my-16 px-4">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="flex-1">
          <h2 className="text-5xl font-black text-blue-900 leading-none uppercase italic">
            Global Education <br />
            <span className="text-orange-500">Advisory</span>
          </h2>
          <p className="mt-6 text-gray-600 font-medium text-lg max-w-xl">
            Empowering Nigerian students to access world-class universities with
            guaranteed admission assistance and scholarship guidance.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {studyDestinations.map((dest, i) => (
              <div
                key={i}
                className="border-l-4 border-blue-900 pl-4 py-2 bg-blue-50/50"
              >
                <h4 className="font-black text-blue-900 text-sm uppercase">
                  {dest.country}
                </h4>
                <p className="text-[10px] font-bold text-gray-500 uppercase">
                  {dest.levels} • {dest.intake}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICATION CARD */}
        <div className="flex-1 bg-white p-8 rounded-[30px] shadow-2xl border-2 border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-900 text-white px-6 py-2 rounded-bl-2xl font-black text-xs uppercase tracking-widest">
            Admissions 2026/2027
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className="text-xl font-black text-blue-900 uppercase mb-6">
              Inquiry Form
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase">
                  Student Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  readOnly
                  className="w-full border-b-2 border-gray-200 py-2 font-bold outline-none text-blue-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase">
                    Target Country
                  </label>
                  <select
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredCountry: e.target.value,
                      })
                    }
                    className="w-full border-b-2 border-gray-200 py-2 font-bold text-sm outline-none focus:border-orange-500"
                  >
                    <option value="">Select Country</option>
                    {studyDestinations.map((d) => (
                      <option key={d.country} value={d.country}>
                        {d.country}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase">
                    Current Level
                  </label>
                  <select
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        lastQualification: e.target.value,
                      })
                    }
                    className="w-full border-b-2 border-gray-200 py-2 font-bold text-sm outline-none focus:border-orange-500"
                  >
                    <option value="WAEC">WAEC/NECO</option>
                    <option value="ND/HND">ND/HND</option>
                    <option value="Degree">Bachelor's Degree</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase">
                  Proposed Course
                </label>
                <input
                  type="text"
                  placeholder="e.g. Computer Science or Nursing"
                  onChange={(e) =>
                    setFormData({ ...formData, courseOfStudy: e.target.value })
                  }
                  className="w-full border-b-2 border-gray-200 py-2 font-bold outline-none focus:border-blue-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="border-b-2 py-2 font-bold text-sm outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="border-b-2 py-2 font-bold text-sm outline-none"
                  required
                />
              </div>
            </div>

            <button
              disabled={loading}
              className="w-full bg-blue-900 hover:bg-orange-600 text-white font-black py-4 rounded-xl uppercase tracking-widest transition-all shadow-lg active:scale-95"
            >
              {loading ? "Processing..." : "Get Free Counseling"}
            </button>
            <p className="text-[9px] text-center text-gray-400 font-bold uppercase italic">
              Jabbama Travels Education Dept — Official Partner to 50+
              Universities
            </p>
          </form>
        </div>
      </div>

      {/* PROCESS STEPS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-blue-900 p-12 rounded-[40px]">
        {[
          {
            step: "01",
            title: "Assessment",
            desc: "We review your academic records and career goals.",
          },
          {
            step: "02",
            title: "Admission",
            desc: "Securing your offer letter from chosen institutions.",
          },
          {
            step: "03",
            title: "Visa Success",
            desc: "Expert guidance on your student visa application.",
          },
        ].map((item, idx) => (
          <div key={idx} className="relative">
            <span className="text-6xl font-black text-white/10 absolute -top-4 left-1/2 -translate-x-1/2">
              {item.step}
            </span>
            <h4 className="text-white font-black uppercase mb-2 relative z-10">
              {item.title}
            </h4>
            <p className="text-blue-200 text-sm font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
