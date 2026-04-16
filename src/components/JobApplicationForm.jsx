"use client";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    position: "Healthcare Assistant / Nursing",
    country: "United Kingdom",
    experienceYears: "",
    lastEmployer: "",
    skills: "",
    languageLevel: "Beginner",
    declared: false,
  });

  const [loading, setLoading] = useState(false);

  // 1. Karbar canje-canje daga form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 2. Tura bayanai zuwa Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.declared) {
      alert("Please check the declaration box to proceed.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "job_applications"), {
        ...formData,
        status: "Reviewing",
        createdAt: serverTimestamp(),
      });

      alert("Job Application Submitted! Jabbama HR will review your profile.");
      e.target.reset(); // Wanke form
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50 px-8" id="job-apply">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black text-blue-900 uppercase italic">
            International Job Portal
          </h3>
          <div className="w-24 h-2 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-500 font-bold uppercase tracking-widest text-xs">
            Apply for Skilled and Unskilled Positions Abroad
          </p>
        </div>

        <div className="bg-white rounded-[50px] shadow-2xl overflow-hidden border-t-[12px] border-blue-900">
          <form onSubmit={handleSubmit} className="p-8 md:p-16 space-y-12">
            {/* SECTION 1: Job Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-blue-900 font-black text-[10px] uppercase mb-2 ml-2 text-xs">
                  Position Applied For
                </label>
                <select
                  name="position"
                  onChange={handleChange}
                  className="bg-gray-100 p-5 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                >
                  <option value="Healthcare Assistant / Nursing">
                    Healthcare Assistant / Nursing
                  </option>
                  <option value="General Construction Worker">
                    General Construction Worker
                  </option>
                  <option value="IT & Software Development">
                    IT & Software Development
                  </option>
                  <option value="Professional Truck Driver">
                    Professional Truck Driver
                  </option>
                  <option value="Hospitality & Hotel Management">
                    Hospitality & Hotel Management
                  </option>
                  <option value="Agriculture & Farm Work">
                    Agriculture & Farm Work
                  </option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-blue-900 font-black text-[10px] uppercase mb-2 ml-2 text-xs">
                  Preferred Work Country
                </label>
                <select
                  name="country"
                  onChange={handleChange}
                  className="bg-gray-100 p-5 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                >
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                </select>
              </div>
            </div>

            {/* SECTION 2: Experience */}
            <div className="space-y-8">
              <h4 className="text-orange-500 font-black text-xs uppercase tracking-widest border-b pb-2">
                Professional Qualifications
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-blue-900 font-black text-[10px] uppercase mb-2 ml-2 text-xs">
                    Total Years of Experience
                  </label>
                  <input
                    name="experienceYears"
                    type="number"
                    required
                    onChange={handleChange}
                    placeholder="e.g. 5"
                    className="bg-gray-100 p-5 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-blue-900 font-black text-[10px] uppercase mb-2 ml-2 text-xs">
                    Current/Last Employer
                  </label>
                  <input
                    name="lastEmployer"
                    type="text"
                    required
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="bg-gray-100 p-5 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col">
                  <label className="text-blue-900 font-black text-[10px] uppercase mb-2 ml-2 text-xs">
                    Key Skills (Comma separated)
                  </label>
                  <textarea
                    name="skills"
                    required
                    onChange={handleChange}
                    placeholder="e.g. Critical Care, Team Leadership..."
                    className="bg-gray-100 p-5 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900 h-32"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* SECTION 3: Documents */}
            <div className="space-y-8">
              <h4 className="text-orange-500 font-black text-xs uppercase tracking-widest border-b pb-2">
                Language & Resume
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-blue-900 font-black text-[10px] uppercase mb-2 ml-2 text-xs">
                    Language Proficiency (English)
                  </label>
                  <select
                    name="languageLevel"
                    onChange={handleChange}
                    className="bg-gray-100 p-5 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Fluent / Expert">Fluent / Expert</option>
                    <option value="IELTS Certified">IELTS Certified</option>
                  </select>
                </div>
                <div className="flex flex-col justify-end italic text-xs font-bold text-blue-900 opacity-60">
                  * Note: Please send your CV directly to our email for
                  verification.
                </div>
              </div>
            </div>

            {/* SECTION 4: Declaration */}
            <div className="bg-orange-50 p-6 rounded-3xl flex items-start gap-4">
              <input
                name="declared"
                type="checkbox"
                required
                onChange={handleChange}
                className="mt-1 w-6 h-6 accent-orange-500 cursor-pointer"
              />
              <p className="text-[11px] font-bold text-gray-600 leading-relaxed uppercase">
                I hereby declare that all information provided is true and
                accurate. I understand that Jabbama Travels will verify my
                documents.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? "bg-gray-400" : "bg-blue-900 hover:bg-orange-500"} text-white py-6 rounded-3xl font-black text-xl transition shadow-xl uppercase italic tracking-widest`}
            >
              {loading ? "SENDING..." : "Submit Job Application"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
