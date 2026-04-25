"use client";
import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ApplicationForm() {
  // 1. Saita State don kowane gurbi
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    homeAddress: "",
    city: "",
    state: "",
    postalCode: "",
    passportNumber: "",
    targetCountry: "United Kingdom",
    visaCategory: "Skilled Worker",
  });

  const [loading, setLoading] = useState(false);

  // 2. Function din tura bayani zuwa Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "travel_applications"), {
        ...formData,
        status: "Pending",
        createdAt: serverTimestamp(),
      });

      alert(
        "Application Submitted Successfully! Jabbama Team will contact you soon.",
      );
      // Wanke form din bayan an tura
      e.target.reset();
    } catch (error) {
      console.error("Error submitting application: ", error);
      alert("Error: Could not submit. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // 3. Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 bg-white px-8" id="apply">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-blue-900 rounded-[60px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border-4 border-blue-900">
          {/* Left Side: Branding */}
          <div className="lg:w-1/4 bg-orange-500 p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-black italic mb-6 leading-none uppercase">
                Global Application Portal
              </h3>
              <p className="font-bold opacity-90 mb-8 border-l-4 border-blue-900 pl-4 text-sm">
                Ensure all contact details are reachable for verification
                purposes.
              </p>
            </div>

            <div className="space-y-6 font-black text-[10px] uppercase italic">
              <div className="flex items-center gap-3 bg-blue-900/20 p-4 rounded-2xl text-xs">
                <span>📍</span> 24/7 Support Available
              </div>
              <div className="flex items-center gap-3 bg-blue-900/20 p-4 rounded-2xl text-xs">
                <span>📧</span> Official Correspondence
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-3/4 bg-white p-8 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* SECTION 1: Personal & Contact */}
              <div>
                <h4 className="text-blue-900 font-black text-sm uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center rounded-full text-xs">
                    01
                  </span>
                  Personal & Contact Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex flex-col">
                    <label className="text-gray-400 font-bold text-[10px] uppercase mb-1 ml-2">
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      type="text"
                      required
                      onChange={handleChange}
                      placeholder="Surname Firstname"
                      className="bg-gray-50 p-4 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-400 font-bold text-[10px] uppercase mb-1 ml-2">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      onChange={handleChange}
                      placeholder="name@domain.com"
                      className="bg-gray-50 p-4 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-400 font-bold text-[10px] uppercase mb-1 ml-2">
                      Primary Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      onChange={handleChange}
                      placeholder="+234..."
                      className="bg-gray-50 p-4 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2: Residential Address */}
              <div>
                <h4 className="text-blue-900 font-black text-sm uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center rounded-full text-xs">
                    02
                  </span>
                  Residential Address Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-gray-400 font-bold text-[10px] uppercase mb-1 ml-2">
                      Home Address
                    </label>
                    <input
                      name="homeAddress"
                      type="text"
                      required
                      onChange={handleChange}
                      placeholder="e.g. No 45, Yan Musa Plaza, Ring Road"
                      className="bg-gray-50 p-4 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:col-span-2">
                    <div className="flex flex-col">
                      <label className="text-gray-400 font-bold text-[10px] uppercase mb-1 ml-2">
                        City
                      </label>
                      <input
                        name="city"
                        type="text"
                        required
                        onChange={handleChange}
                        placeholder="Kano"
                        className="bg-gray-50 p-4 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-400 font-bold text-[10px] uppercase mb-1 ml-2">
                        State
                      </label>
                      <input
                        name="state"
                        type="text"
                        required
                        onChange={handleChange}
                        placeholder="Kano State"
                        className="bg-gray-50 p-4 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-400 font-bold text-[10px] uppercase mb-1 ml-2">
                        Postal Code
                      </label>
                      <input
                        name="postalCode"
                        type="text"
                        required
                        onChange={handleChange}
                        placeholder="700213"
                        className="bg-gray-50 p-4 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Travel & Passport */}
              <div>
                <h4 className="text-blue-900 font-black text-sm uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center rounded-full text-xs">
                    03
                  </span>
                  Travel Identity
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex flex-col">
                    <label className="text-gray-400 font-bold text-[10px] uppercase mb-1 ml-2">
                      Passport Number
                    </label>
                    <input
                      name="passportNumber"
                      type="text"
                      required
                      onChange={handleChange}
                      placeholder="A12345678"
                      className="bg-gray-50 p-4 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900 uppercase"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-400 font-bold text-[10px] uppercase mb-1 ml-2">
                      Target Country
                    </label>
                    <select
                      name="targetCountry"
                      onChange={handleChange}
                      className="bg-gray-50 p-4 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                    >
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-400 font-bold text-[10px] uppercase mb-1 ml-2">
                      Visa Category
                    </label>
                    <select
                      name="visaCategory"
                      onChange={handleChange}
                      className="bg-gray-50 p-4 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition font-bold text-blue-900"
                    >
                      <option value="Skilled Worker">Skilled Worker</option>
                      <option value="Study Permit">Study Permit</option>
                      <option value="Tourist Visa">Tourist Visa</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${loading ? "bg-gray-400" : "bg-blue-900 hover:bg-orange-600"} text-white py-6 rounded-[30px] font-black text-xl transition shadow-2xl mt-6 uppercase italic tracking-tighter`}
              >
                {loading ? "Processing..." : "Finalize & Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
