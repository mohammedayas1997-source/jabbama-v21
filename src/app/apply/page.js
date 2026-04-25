"use client";
import React, { useState } from "react";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// Line 7 & 8 - Note the double dots to exit /apply AND /app
import Navbar from "../../components/Navbar";
import InternationalApplicationForm from "../../components/InternationalApplicationForm";

export default function InternationalApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState({
    passport: null,
    cv: null,
    certificate: null,
    referenceLetter: null,
    policeClearance: null,
  });

  const [formData, setFormData] = useState({
    paymentRef: "",
    paymentDate: "",
    fullName: "",
    dob: "",
    placeOfBirth: "",
    gender: "",
    maritalStatus: "",
    nationality: "",
    stateOfOrigin: "",
    passportNo: "",
    expiryDate: "",
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
    qualification: "",
    fieldOfStudy: "",
    certifications: "",
    experienceYears: "",
    currentRole: "",
    targetDestination: "",
    preferredIndustry: "",
    englishProficiency: "",
    ieltsTaken: "",
    ieltsScore: "",
    otherLanguages: "",
  });

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const uploadFile = async (file, type) => {
    if (!file) return null;
    const storageRef = ref(
      storage,
      `applications/${formData.fullName || "unnamed"}/${type}_${Date.now()}`,
    );
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const passportUrl = await uploadFile(files.passport, "passport");
      const cvUrl = await uploadFile(files.cv, "cv");
      const certUrl = await uploadFile(files.certificate, "certificate");
      const refUrl = await uploadFile(files.referenceLetter, "reference");
      const policeUrl = await uploadFile(
        files.policeClearance,
        "police_clearance",
      );

      await addDoc(collection(db, "applications"), {
        ...formData,
        documents: {
          passportPhoto: passportUrl,
          professionalCV: cvUrl,
          academicCertificate: certUrl,
          referenceLetter: refUrl,
          policeClearance: policeUrl,
        },
        submittedAt: new Date(),
        status: "Pending",
      });
      alert("Application and Documents Submitted Successfully!");
    } catch (error) {
      console.error("Error submitting application: ", error);
      alert("Submission failed. Please check console.");
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked ? value : "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-2xl border border-gray-200 my-10 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b-4 border-blue-900 pb-4 mb-6 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center text-white font-black text-2xl border-4 border-orange-500">
            JTT
          </div>
          <div>
            <h1 className="text-4xl font-black text-blue-900 tracking-tighter">
              JABBAMA
            </h1>
            <p className="text-md font-bold text-slate-800 uppercase italic">
              Travels and Tours Limited
            </p>
            <p className="text-xs font-bold text-orange-600 tracking-widest uppercase">
              Your Gateway to Global Opportunities
            </p>
          </div>
        </div>
        <div className="text-center md:text-right">
          <h2 className="bg-blue-900 text-white px-6 py-3 font-black text-xl uppercase rounded-sm">
            International Job Placement Form
          </h2>
          <p className="text-sm font-bold mt-2 text-gray-600 tracking-widest">
            Ref No: JTT/INTL/2026/__________
          </p>
        </div>
      </div>

      <p className="text-[10px] font-bold text-center border-2 border-black p-1 mb-6 uppercase">
        IMPORTANT: Please complete this form in BLOCK LETTERS. Ensure all
        information is accurate as it will be used for official background
        checks.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 text-sm text-slate-900"
      >
        {/* PAYMENT SECTION */}
        <section>
          <div className="bg-slate-200 p-2 border-l-8 border-blue-900 font-black uppercase mb-4 flex items-center gap-2">
            <span>💳</span> Payment Information
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
            <div className="flex flex-col">
              <label className="font-bold text-blue-900">
                Application Fee:
              </label>
              <span className="text-lg font-black text-orange-600">
                ₦50,000 (Non-Refundable)
              </span>
            </div>
            <input
              type="text"
              name="paymentRef"
              placeholder="Payment Ref/Receipt No"
              onChange={handleChange}
              className="border-b-2 border-slate-300 focus:border-blue-900 outline-none p-2 font-bold"
            />
            <input
              type="date"
              name="paymentDate"
              onChange={handleChange}
              className="border-b-2 border-slate-300 focus:border-blue-900 outline-none p-2"
            />
          </div>
        </section>

        {/* SECTION A: PERSONAL DATA */}
        <section>
          <div className="bg-blue-900 text-white p-2 font-black uppercase flex items-center gap-2 mb-4">
            <span>👤</span> Section A: Personal Data
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 px-2">
            <div className="md:col-span-2">
              <label className="font-bold uppercase text-xs">
                Full Name (As seen on Passport)
              </label>
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                className="w-full border-b-2 border-slate-300 focus:border-blue-900 outline-none p-1 font-bold"
                required
              />
            </div>
            <div>
              <label className="font-bold uppercase text-xs">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                onChange={handleChange}
                className="w-full border-b-2 border-slate-300 focus:border-blue-900 outline-none p-1"
              />
            </div>
            <div>
              <label className="font-bold uppercase text-xs">
                Place of Birth
              </label>
              <input
                type="text"
                name="placeOfBirth"
                onChange={handleChange}
                className="w-full border-b-2 border-slate-300 focus:border-blue-900 outline-none p-1"
              />
            </div>
            <div className="flex items-center gap-6">
              <span className="font-bold uppercase text-xs text-blue-900">
                Gender:
              </span>
              <label className="flex items-center gap-2 font-bold">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  className="accent-blue-900"
                />{" "}
                Male
              </label>
              <label className="flex items-center gap-2 font-bold">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  className="accent-blue-900"
                />{" "}
                Female
              </label>
            </div>
            <div>
              <label className="font-bold uppercase text-xs">
                Marital Status
              </label>
              <input
                type="text"
                name="maritalStatus"
                onChange={handleChange}
                className="w-full border-b-2 border-slate-300 focus:border-blue-900 outline-none p-1"
              />
            </div>
            <input
              type="text"
              name="nationality"
              placeholder="NATIONALITY"
              onChange={handleChange}
              className="border-b-2 border-slate-300 outline-none p-1 uppercase font-bold"
            />
            <input
              type="text"
              name="stateOfOrigin"
              placeholder="STATE OF ORIGIN"
              onChange={handleChange}
              className="border-b-2 border-slate-300 outline-none p-1 uppercase font-bold"
            />
            <input
              type="text"
              name="passportNo"
              placeholder="PASSPORT NUMBER"
              onChange={handleChange}
              className="border-b-2 border-slate-300 outline-none p-1 font-bold"
            />
            <input
              type="date"
              name="expiryDate"
              onChange={handleChange}
              className="border-b-2 border-slate-300 outline-none p-1"
            />
            <input
              type="text"
              name="phone"
              placeholder="PHONE NUMBER"
              onChange={handleChange}
              className="border-b-2 border-slate-300 outline-none p-1 font-bold"
            />
            <input
              type="text"
              name="whatsapp"
              placeholder="WHATSAPP NUMBER"
              onChange={handleChange}
              className="border-b-2 border-slate-300 outline-none p-1 font-bold"
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              onChange={handleChange}
              className="md:col-span-2 border-b-2 border-slate-300 outline-none p-1 font-bold"
            />
            <textarea
              name="address"
              placeholder="RESIDENTIAL ADDRESS"
              onChange={handleChange}
              className="md:col-span-2 border-b-2 border-slate-300 outline-none p-1 h-12"
            ></textarea>
          </div>
        </section>

        {/* SECTION B: ACADEMIC & PROFESSIONAL */}
        <section>
          <div className="bg-blue-900 text-white p-2 font-black uppercase flex items-center gap-2 mb-4">
            <span>🎓</span> Section B: Academic & Professional Profile
          </div>
          <div className="px-2 space-y-6">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="font-black text-blue-900 uppercase text-xs">
                Highest Qualification:
              </span>
              {[
                "SSCE",
                "ND",
                "HND",
                "Bachelor's Degree",
                "Master's/Post-Grad",
                "Vocational/Trade Test",
              ].map((q) => (
                <label
                  key={q}
                  className="flex items-center gap-2 font-bold text-[11px]"
                >
                  <input
                    type="checkbox"
                    name="qualification"
                    value={q}
                    onChange={handleChange}
                    className="w-4 h-4 accent-blue-900"
                  />{" "}
                  {q}
                </label>
              ))}
            </div>
            <input
              type="text"
              name="fieldOfStudy"
              placeholder="FIELD OF STUDY"
              onChange={handleChange}
              className="w-full border-b-2 border-slate-300 outline-none p-1 uppercase font-bold"
            />
            <input
              type="text"
              name="certifications"
              placeholder="PROFESSIONAL CERTIFICATIONS (IF ANY)"
              onChange={handleChange}
              className="w-full border-b-2 border-slate-300 outline-none p-1 uppercase font-bold"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="experienceYears"
                placeholder="YEARS OF EXPERIENCE"
                onChange={handleChange}
                className="border-b-2 border-slate-300 outline-none p-1 font-bold"
              />
              <input
                type="text"
                name="currentRole"
                placeholder="CURRENT/PREVIOUS ROLE"
                onChange={handleChange}
                className="border-b-2 border-slate-300 outline-none p-1 font-bold"
              />
            </div>
          </div>
        </section>

        {/* SECTION C: PREFERENCE & ELIGIBILITY */}
        <section>
          <div className="bg-blue-900 text-white p-2 font-black uppercase flex items-center gap-2 mb-4">
            <span>🌍</span> Section C: Preference & Eligibility
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-2">
            <div className="space-y-3">
              <label className="font-black text-blue-900 border-b border-blue-900 block mb-2 uppercase text-xs">
                Target Destination:
              </label>
              {[
                "Tier 1: UK / Canada / USA / Australia / New Zealand",
                "Asia: Japan / South Korea",
                "Middle East: UAE (Dubai) / Qatar / Saudi Arabia",
                "Europe: Schengen Zone (Poland, Germany, etc.)",
              ].map((dest) => (
                <label
                  key={dest}
                  className="flex items-center gap-2 font-bold text-[11px]"
                >
                  <input
                    type="radio"
                    name="targetDestination"
                    value={dest}
                    onChange={handleChange}
                    className="accent-blue-900"
                  />{" "}
                  {dest}
                </label>
              ))}
            </div>
            <div className="space-y-2">
              <label className="font-black text-blue-900 border-b border-blue-900 block mb-2 uppercase text-xs">
                Preferred Industry:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Healthcare",
                  "Logistics",
                  "Construction",
                  "Agriculture",
                  "Hospitality",
                  "IT & Administration",
                  "General Labor",
                  "Others",
                ].map((ind) => (
                  <label
                    key={ind}
                    className="flex items-center gap-2 font-bold text-[11px]"
                  >
                    <input
                      type="checkbox"
                      name="preferredIndustry"
                      value={ind}
                      onChange={handleChange}
                      className="accent-blue-900"
                    />{" "}
                    {ind}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION D: LANGUAGE & SKILLS */}
        <section>
          <div className="bg-blue-900 text-white p-2 font-black uppercase flex items-center gap-2 mb-4">
            <span>🗣️</span> Section D: Language & Skills
          </div>
          <div className="px-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-xs uppercase">
                English Proficiency:
              </span>
              <div className="flex gap-4">
                {["Native/Fluent", "Intermediate", "Basic"].map((lvl) => (
                  <label
                    key={lvl}
                    className="flex items-center gap-2 text-[11px] font-bold"
                  >
                    <input
                      type="radio"
                      name="englishProficiency"
                      value={lvl}
                      onChange={handleChange}
                    />{" "}
                    {lvl}
                  </label>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-xs uppercase">
                IELTS/TOEFL/OET Taken?
              </span>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-[11px] font-bold">
                  <input
                    type="radio"
                    name="ieltsTaken"
                    value="Yes"
                    onChange={handleChange}
                  />{" "}
                  Yes
                </label>
                <label className="flex items-center gap-2 text-[11px] font-bold">
                  <input
                    type="radio"
                    name="ieltsTaken"
                    value="No"
                    onChange={handleChange}
                  />{" "}
                  No
                </label>
                <input
                  type="text"
                  name="ieltsScore"
                  placeholder="Score"
                  onChange={handleChange}
                  className="border-b border-slate-300 w-16 text-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION E: DOCUMENT UPLOAD */}
        <section>
          <div className="bg-blue-900 text-white p-2 font-black uppercase flex items-center gap-2 mb-4">
            <span>📂</span> Section E: Document Upload (PDF/Images)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-slate-50 border-2 border-dashed border-slate-300">
            {[
              {
                label: "Valid International Passport (Scanned)",
                name: "passport",
              },
              { label: "Updated Professional CV (Intl Format)", name: "cv" },
              {
                label: "Academic Certificates (Verified Copies)",
                name: "certificate",
              },
              {
                label: "Work Experience/Reference Letters",
                name: "referenceLetter",
              },
              { label: "Police Character Clearance", name: "policeClearance" },
            ].map((doc) => (
              <div key={doc.name}>
                <label className="block text-[11px] font-black text-slate-700 uppercase mb-2">
                  {doc.label}
                </label>
                <input
                  type="file"
                  name={doc.name}
                  onChange={handleFileChange}
                  className="w-full text-[10px] file:mr-4 file:py-1 file:px-4 file:rounded-sm file:border-0 file:text-[10px] file:font-black file:bg-blue-900 file:text-white hover:file:bg-orange-600"
                />
              </div>
            ))}
          </div>
        </section>

        {/* DECLARATION */}
        <section className="bg-orange-50 p-4 border border-orange-200">
          <div className="bg-orange-600 text-white p-1 px-3 font-black text-xs uppercase mb-2">
            Declaration & Terms
          </div>
          <p className="text-[10px] italic leading-tight text-slate-800">
            I,{" "}
            <input
              type="text"
              className="bg-transparent border-b border-black w-48 outline-none text-[10px] font-bold text-center px-1"
              placeholder="ENTER FULL NAME"
            />
            , hereby certify that all information provided is true. I understand
            that any false declaration may lead to automatic disqualification
            without a refund. I also authorize JABBAMA TRAVELS AND TOURS to
            process my data for the purpose of job placement and visa
            application.
          </p>
        </section>

        {/* SUBMIT */}
        <div className="flex flex-col items-center pt-6 border-t-4 border-blue-900">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-5 rounded-sm font-black text-xl uppercase tracking-widest transition-all shadow-xl ${loading ? "bg-slate-400 cursor-not-allowed" : "bg-orange-600 text-white hover:bg-blue-900"}`}
          >
            {loading
              ? "Processing Submission..."
              : "Submit Official Application"}
          </button>
        </div>

        {/* FOOTER CONTACT */}
        <footer className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] font-bold pt-4 text-slate-600 uppercase">
          <div className="flex items-center gap-2">
            <span className="text-blue-900 text-lg">📍</span>
            <span>
              Block C 14/15 Yan Musa Plaza, Ring Road, Kano State, Nigeria.
            </span>
          </div>
          <div className="flex flex-col md:items-end">
            <div className="flex items-center gap-2">
              <span className="text-blue-900">📞</span> 09022064702 /
              07047497491
            </div>
            <div className="text-orange-600 font-black italic">
              www.jabbamatravels.com
            </div>
          </div>
        </footer>
      </form>
    </div>
  );
}
