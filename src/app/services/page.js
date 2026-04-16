import React from "react";
import Navbar from "../../components/Navbar";

export default function ServicesPage() {
  const allServices = [
    {
      title: "Hajj & Umrah",
      desc: "Ingantaccen tsarin gudanar da ibada cikin sauki.",
    },
    {
      title: "Air & Sea Cargo",
      desc: "Aiko da kayayyaki daga kowane sashe na duniya.",
    },
    {
      title: "Citizenship by Investment",
      desc: "Samun fasfo na kasashen waje ta hanyar saka jari.",
    },
    {
      title: "Holiday Packages",
      desc: "Ziyartar wuraren shakatawa na duniya.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-20 px-6 container mx-auto">
        <h1 className="text-4xl font-black text-blue-900 border-b-4 border-orange-500 inline-block mb-10 italic">
          OUR SERVICES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allServices.map((s, i) => (
            <div
              key={i}
              className="p-10 bg-gray-50 rounded-3xl border-2 border-transparent hover:border-blue-900 transition-all group"
            >
              <h3 className="text-2xl font-black text-blue-900 group-hover:text-orange-600 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
