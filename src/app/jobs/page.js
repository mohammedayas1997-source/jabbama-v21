import React from "react";
import Navbar from "../../components/Navbar";

export default function JobsPage() {
  const jobs = [
    {
      country: "United Kingdom",
      role: "Healthcare & Skilled Worker",
      status: "Open",
    },
    { country: "Canada", role: "Express Entry / Study Permit", status: "Open" },
    { country: "Australia", role: "Work & Holiday Visa", status: "Limited" },
    { country: "Japan", role: "Technical Intern", status: "Open" },
    { country: "South Korea", role: "E-9 Factory Work", status: "Urgent" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-20 px-8 container mx-auto">
        <h1 className="text-5xl font-black text-blue-900 mb-4 italic">
          JOBS ABROAD
        </h1>
        <p className="text-orange-600 font-bold mb-12 tracking-widest uppercase italic">
          Guraben Aiki a Kasashen Waje
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((j, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-blue-900 flex justify-between items-center group hover:bg-blue-50 transition"
            >
              <div>
                <h3 className="text-2xl font-black text-blue-900 uppercase">
                  {j.country}
                </h3>
                <p className="text-gray-500 font-bold">{j.role}</p>
              </div>
              <span
                className={`px-4 py-1 rounded-full text-xs font-black ${j.status === "Urgent" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
              >
                {j.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
