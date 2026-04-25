"use client";
import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function StudyAbroadPortal() {
  const [loading, setLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

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
    fullName: "",
    email: "",
    phone: "",
    preferredCountry: "",
    courseOfStudy: "",
    lastQualification: "Degree",
    passportPhoto: null,
    documents: null, // Don loda takardu da yawa (PDF/Images)
    additionalInfo: "", // Bangaren "Others"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // A lura: A real-life apps, muna dora Files din a Firebase Storage
      // sannan mu tura URLs din zuwa Firestore.
      await addDoc(collection(db, "study_abroad_apps"), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        preferredCountry: formData.preferredCountry,
        courseOfStudy: formData.courseOfStudy,
        lastQualification: formData.lastQualification,
        additionalInfo: formData.additionalInfo,
        submittedAt: new Date(),
        status: "Pending Review",
      });

      alert("Application & Documents Submitted Successfully!");
      setIsFormOpen(false);
      // Reset Form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        preferredCountry: "",
        courseOfStudy: "",
        lastQualification: "Degree",
        passportPhoto: null,
        documents: null,
        additionalInfo: "",
      });
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please check your connection.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto my-16 px-4 font-sans">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="flex-1">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-black uppercase mb-4">
            Jabbama Education Department
          </div>
          <h2 className="text-6xl font-black text-blue-900 leading-[0.9] uppercase italic">
            Study <span className="text-orange-500">Abroad</span> <br />
            Portal
          </h2>
          <p className="mt-6 text-gray-600 font-medium text-lg max-w-xl">
            Upload your credentials and let our experts handle your admission
            and visa process from start to finish.
          </p>

          <button
            onClick={() => setIsFormOpen(true)}
            className="mt-8 bg-blue-900 text-white px-10 py-5 rounded-2xl font-black uppercase hover:bg-orange-600 transition-all shadow-2xl active:scale-95"
          >
            Start Your Application
          </button>
        </div>

        {/* Decorative Stats Card */}
        <div className="flex-1 bg-gray-100 rounded-[50px] p-12 border-4 border-white shadow-inner hidden md:block">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-4xl font-black text-blue-900 italic">50+</h4>
              <p className="text-[10px] font-bold text-gray-500 uppercase">
                Partner Universities
              </p>
            </div>
            <div>
              <h4 className="text-4xl font-black text-orange-500 italic">
                100%
              </h4>
              <p className="text-[10px] font-bold text-gray-500 uppercase">
                Admission Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP FORM (MODAL) */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/90 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-3xl my-8 rounded-[40px] shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full font-black text-gray-500 hover:bg-red-500 hover:text-white transition"
            >
              ✕
            </button>

            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-black text-blue-900 uppercase italic mb-6">
                Education Inquiry & Document Upload
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Personal & Course Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Legal Name"
                      required
                      className="w-full border-b-2 border-gray-200 py-3 font-bold outline-none focus:border-orange-500"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full border-b-2 border-gray-200 py-3 font-bold outline-none focus:border-orange-500"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp Number"
                      required
                      className="w-full border-b-2 border-gray-200 py-3 font-bold outline-none focus:border-orange-500"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-4">
                    <select
                      required
                      className="w-full border-b-2 border-gray-200 py-3 font-bold text-sm outline-none focus:border-orange-500"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredCountry: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Target Country</option>
                      {studyDestinations.map((d) => (
                        <option key={d.country} value={d.country}>
                          {d.country}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      placeholder="Proposed Course of Study"
                      required
                      className="w-full border-b-2 border-gray-200 py-3 font-bold outline-none focus:border-orange-500"
                      value={formData.courseOfStudy}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          courseOfStudy: e.target.value,
                        })
                      }
                    />
                    <select
                      className="w-full border-b-2 border-gray-200 py-3 font-bold text-sm outline-none focus:border-orange-500"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          lastQualification: e.target.value,
                        })
                      }
                    >
                      <option value="Degree">Bachelors Degree</option>
                      <option value="HND">HND</option>
                      <option value="WAEC">WAEC/NECO</option>
                      <option value="Masters">Masters</option>
                    </select>
                  </div>
                </div>

                {/* 2. FILE UPLOADS (The New Section) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-3xl border-2 border-dashed border-gray-200">
                  {/* Passport Photograph */}
                  <div>
                    <label className="block text-[10px] font-black text-blue-900 uppercase mb-2">
                      1. Passport Photo (JPG/PNG)
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      required
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          passportPhoto: e.target.files[0],
                        })
                      }
                      className="text-[10px] font-bold text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:bg-blue-900 file:text-white hover:file:bg-orange-500 cursor-pointer"
                    />
                  </div>

                  {/* Other Documents */}
                  <div>
                    <label className="block text-[10px] font-black text-blue-900 uppercase mb-2">
                      2. Educational Documents (PDFs)
                    </label>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={(e) =>
                        setFormData({ ...formData, documents: e.target.files })
                      }
                      className="text-[10px] font-bold text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:bg-orange-500 file:text-white hover:file:bg-blue-900 cursor-pointer"
                    />
                    <p className="text-[8px] mt-1 text-gray-400 font-bold uppercase italic">
                      *Upload Transcript, Degree, and WAEC
                    </p>
                  </div>
                </div>

                {/* 3. OTHERS (Additional Info) */}
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase">
                    Others / Additional Information
                  </label>
                  <textarea
                    placeholder="Tell us about your budget, scholarship needs, or specific university preferences..."
                    className="w-full p-4 mt-2 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-blue-900 outline-none font-bold text-sm h-24 transition-all"
                    value={formData.additionalInfo}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        additionalInfo: e.target.value,
                      })
                    }
                  ></textarea>
                </div>

                <button
                  disabled={loading}
                  className="w-full bg-blue-900 hover:bg-orange-500 text-white font-black py-5 rounded-2xl uppercase tracking-widest transition-all shadow-xl active:scale-[0.98] disabled:opacity-50"
                >
                  {loading ? "Uploading Data..." : "Submit Full Application"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* PROCESS STEPS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-blue-900 p-12 rounded-[40px] shadow-2xl">
        {[
          {
            step: "01",
            title: "Submit Documents",
            desc: "Upload your credentials for our academic board to review.",
          },
          {
            step: "02",
            title: "University Selection",
            desc: "We match you with 3-5 top universities based on your profile.",
          },
          {
            step: "03",
            title: "Visa Processing",
            desc: "Our visa experts guide you through the embassy interview.",
          },
        ].map((item, idx) => (
          <div key={idx} className="relative">
            <span className="text-7xl font-black text-white/5 absolute -top-4 left-1/2 -translate-x-1/2">
              {item.step}
            </span>
            <h4 className="text-white font-black uppercase mb-2 relative z-10">
              {item.title}
            </h4>
            <p className="text-blue-200 text-xs font-bold relative z-10">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
