"use client";
import React, { useState } from "react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white shadow-2xl rounded-[40px] overflow-hidden border border-gray-200">
      {/* HEADER SECTION */}
      <div className="bg-[#003366] p-8 text-white text-center relative">
        <div className="absolute top-4 right-8 text-xs font-mono opacity-70">
          Ref No: JTT/INTL/2026/__________
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic">
          JABBAMA TRAVELS AND TOURS
        </h1>
        <p className="text-orange-400 font-bold tracking-widest text-sm mb-4">
          Your Gateway to Global Opportunities
        </p>
        <div className="bg-white text-[#003366] inline-block px-6 py-2 rounded-full font-black text-xl shadow-lg uppercase">
          International Job Placement Form
        </div>
        <p className="mt-4 text-[10px] text-red-400 font-bold uppercase tracking-widest">
          IMPORTANT: Please complete this form in BLOCK LETTERS. Ensure all
          information is accurate.
        </p>
      </div>

      <form className="p-6 md:p-10 space-y-8">
        {/* PAYMENT INFORMATION */}
        <section className="bg-orange-50 border-2 border-orange-200 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💰</span>
            <h3 className="font-black text-[#003366] uppercase tracking-tight">
              Payment Information
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase">
                Application Fee
              </label>
              <input
                type="text"
                value="₦50,000 (Non-Refundable)"
                disabled
                className="w-full bg-transparent border-b-2 border-orange-300 py-2 font-bold text-blue-900"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase">
                Payment Ref/Receipt No
              </label>
              <input
                type="text"
                name="paymentRef"
                className="w-full border-b-2 border-orange-300 py-2 focus:outline-none focus:border-blue-900 transition"
                placeholder="Enter Reference"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase">
                Upload Receipt (Screenshot)
              </label>
              <input type="file" className="w-full text-xs mt-2" />
            </div>
          </div>
        </section>

        {/* SECTION A: PERSONAL DATA */}
        <section className="border-2 border-blue-100 rounded-3xl p-6">
          <div className="bg-blue-900 text-white px-4 py-1 inline-block rounded-lg text-sm font-black mb-6 uppercase">
            Section A: Personal Data
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase">
                Full Name (As seen on Passport)
              </label>
              <input
                type="text"
                className="w-full border-b border-slate-300 py-2 focus:border-blue-900 outline-none uppercase font-bold"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full border-b border-slate-300 py-2 focus:border-blue-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase">
                Place of Birth
              </label>
              <input
                type="text"
                className="w-full border-b border-slate-300 py-2 focus:border-blue-900 outline-none"
              />
            </div>
            <div className="flex gap-4">
              <label className="text-[10px] font-black text-slate-400 uppercase w-full">
                Gender:
                <select className="block w-full border-b border-slate-300 py-2 font-bold outline-none">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </label>
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase">
                Marital Status
              </label>
              <input
                type="text"
                className="w-full border-b border-slate-300 py-2 focus:border-blue-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase">
                International Passport No
              </label>
              <input
                type="text"
                className="w-full border-b border-slate-300 py-2 focus:border-blue-900 outline-none uppercase"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase">
                Passport Expiry Date
              </label>
              <input
                type="date"
                className="w-full border-b border-slate-300 py-2 focus:border-blue-900 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase">
                Upload International Passport (Data Page)
              </label>
              <input
                type="file"
                className="w-full text-xs mt-2 border border-dashed border-blue-300 p-4 rounded-xl bg-blue-50"
              />
            </div>
          </div>
        </section>

        {/* SECTION B: ACADEMIC & PROFESSIONAL */}
        <section className="border-2 border-blue-100 rounded-3xl p-6">
          <div className="bg-blue-900 text-white px-4 py-1 inline-block rounded-lg text-sm font-black mb-6 uppercase">
            Section B: Academic & Professional Profile
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 flex flex-wrap gap-4 border-b pb-4">
              <span className="text-[10px] font-black text-slate-400 uppercase w-full">
                Highest Qualification:
              </span>
              {[
                "SSCE",
                "ND",
                "HND",
                "Bachelor's Degree",
                "Master's",
                "Vocational",
              ].map((q) => (
                <label
                  key={q}
                  className="flex items-center gap-2 text-xs font-bold text-blue-900"
                >
                  <input type="checkbox" className="accent-blue-900" /> {q}
                </label>
              ))}
            </div>
            <div className="md:col-span-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase">
                Upload Academic Certificates (Merge all in one PDF)
              </label>
              <input
                type="file"
                className="w-full text-xs mt-2 border border-dashed border-blue-300 p-4 rounded-xl bg-blue-50"
              />
            </div>
          </div>
        </section>

        {/* SECTION C: PREFERENCE & ELIGIBILITY */}
        <section className="border-2 border-blue-100 rounded-3xl p-6 bg-slate-50">
          <div className="bg-blue-900 text-white px-4 py-1 inline-block rounded-lg text-sm font-black mb-6 uppercase">
            Section C: Preference & Eligibility
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-3">
                Target Destination (Select Priority):
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Tier 1: UK / Canada / USA / Australia",
                  "Asia: Japan / South Korea",
                  "Middle East: UAE / Qatar / Saudi Arabia",
                  "Europe: Schengen Zone",
                ].map((d) => (
                  <label
                    key={d}
                    className="flex items-center gap-2 text-xs font-bold p-3 bg-white border rounded-xl hover:border-orange-500 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="destination"
                      className="accent-orange-500"
                    />{" "}
                    {d}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION F: DECLARATION */}
        <section className="border-4 border-red-100 rounded-3xl p-6 bg-red-50/30">
          <div className="bg-red-600 text-white px-4 py-1 inline-block rounded-lg text-sm font-black mb-6 uppercase">
            Section F: Declaration & Terms
          </div>
          <p className="text-[11px] leading-relaxed font-bold text-slate-700 italic">
            I, ________________________________, hereby certify that all
            information provided is true. I understand that any false
            declaration may lead to automatic disqualification without a refund.
            I also authorize JABBAMA TRAVELS AND TOURS to process my data for
            the purpose of job placement and visa application.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-b-2 border-slate-400 py-4">
              <label className="block text-[10px] font-black text-slate-400 uppercase">
                Applicant Signature (Upload or Sign)
              </label>
              <input type="file" className="mt-2 text-xs" />
            </div>
            <div className="border-b-2 border-slate-400 py-4">
              <label className="block text-[10px] font-black text-slate-400 uppercase">
                Date
              </label>
              <input
                type="date"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>
        </section>

        {/* SUBMIT BUTTON */}
        <button className="w-full bg-[#003366] hover:bg-orange-600 text-white py-6 rounded-[25px] font-black text-2xl shadow-2xl transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-4">
          SUBMIT OFFICIAL APPLICATION <span>🚀</span>
        </button>
      </form>

      {/* FOOTER INFO */}
      <div className="bg-slate-100 p-6 flex flex-wrap justify-between items-center text-[10px] font-black text-slate-500 uppercase tracking-widest border-t">
        <p>Address: Block C 14/15 Yan Musa Plaza, Ring Road, Kano State.</p>
        <p>Hotlines: 09022064702 / 07047497491</p>
      </div>
    </div>
  );
}
