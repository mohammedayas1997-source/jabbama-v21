"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/navigation";

export default function SuperAdminDashboard() {
  const [stats, setStats] = useState({ visa: 0, jobs: 0, total: 0 });
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEverything = async () => {
      setLoading(true);
      try {
        // 1. Kwaso Visa Applications
        const visaSnap = await getDocs(collection(db, "travel_applications"));
        const visaList = visaSnap.docs.map((doc) => ({
          id: doc.id,
          type: "VISA",
          ...doc.data(),
        }));

        // A cikin function dinka:
        const router = useRouter();
        const [user, setUser] = useState(null);

        useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              fetchEverything(); // Kwaso bayanai idan yana Login
            } else {
              router.push("/admin/login"); // In bai yi login ba, kora shi
            }
          });
          return () => unsubscribe();
        }, []);

        if (!user)
          return (
            <div className="p-20 text-center font-black uppercase animate-pulse">
              Checking Authorization...
            </div>
          );

        // 2. Kwaso Job Applications
        const jobSnap = await getDocs(collection(db, "job_applications"));
        const jobList = jobSnap.docs.map((doc) => ({
          id: doc.id,
          type: "JOB",
          ...doc.data(),
        }));

        // 3. Hada su guri daya mu jera su daga na kusa (Newest First)
        const combined = [...visaList, ...jobList].sort(
          (a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0),
        );

        setAllData(combined);
        setStats({
          visa: visaList.length,
          jobs: jobList.length,
          total: visaList.length + jobList.length,
        });
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEverything();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* SIDEBAR (Optional) */}
      <div className="w-64 bg-blue-900 hidden lg:block p-8 text-white">
        <h2 className="text-2xl font-black italic mb-12 uppercase tracking-tighter">
          Jabbama Console
        </h2>
        <nav className="space-y-6">
          <div className="text-orange-400 font-bold text-[10px] uppercase tracking-[0.3em]">
            Main Menu
          </div>
          <button className="flex items-center gap-4 font-bold text-sm opacity-100">
            📊 Overview
          </button>
          <button className="flex items-center gap-4 font-bold text-sm opacity-50 hover:opacity-100 transition">
            🌍 Visa Requests
          </button>
          <button className="flex items-center gap-4 font-bold text-sm opacity-50 hover:opacity-100 transition">
            💼 Job Requests
          </button>
          <button className="flex items-center gap-4 font-bold text-sm opacity-50 hover:opacity-100 transition">
            ⚙️ Settings
          </button>
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-[35px] shadow-sm border border-gray-100">
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              Total Applications
            </p>
            <h3 className="text-5xl font-black text-blue-900 mt-2">
              {stats.total}
            </h3>
            <div className="w-12 h-1 bg-blue-900 mt-4 rounded-full"></div>
          </div>
          <div className="bg-white p-8 rounded-[35px] shadow-sm border border-gray-100">
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              Visa Queries
            </p>
            <h3 className="text-5xl font-black text-orange-500 mt-2">
              {stats.visa}
            </h3>
            <div className="w-12 h-1 bg-orange-500 mt-4 rounded-full"></div>
          </div>
          <div className="bg-white p-8 rounded-[35px] shadow-sm border border-gray-100">
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              Job Inquiries
            </p>
            <h3 className="text-5xl font-black text-green-600 mt-2">
              {stats.jobs}
            </h3>
            <div className="w-12 h-1 bg-green-600 mt-4 rounded-full"></div>
          </div>
        </div>

        {/* RECENT ACTIVITY TABLE */}
        <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <h4 className="text-blue-900 font-black uppercase text-sm tracking-widest italic">
              Live Activity Stream
            </h4>
            <span className="bg-green-100 text-green-700 text-[10px] px-4 py-1 rounded-full font-black animate-pulse uppercase">
              Live Portal
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] bg-gray-50/50">
                  <th className="p-6">Applicant Name</th>
                  <th className="p-6">Type</th>
                  <th className="p-6">Interested In</th>
                  <th className="p-6">Contact Info</th>
                  <th className="p-6 text-right">Date/Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {allData.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-50/30 transition">
                    <td className="p-6">
                      <div className="font-black text-blue-900 uppercase text-md leading-none">
                        {item.fullName || item.lastEmployer}
                      </div>
                      <div className="text-[10px] text-gray-400 mt-2 font-bold uppercase italic">
                        {item.passportNumber || "No Passport Provided"}
                      </div>
                    </td>
                    <td className="p-6">
                      <span
                        className={`text-[9px] font-black px-3 py-1 rounded-lg ${item.type === "VISA" ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"}`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="p-6">
                      <div className="font-bold text-gray-700 text-xs uppercase">
                        {item.targetCountry || item.country}
                      </div>
                      <div className="text-[10px] text-blue-400 font-bold">
                        {item.visaCategory || item.position}
                      </div>
                    </td>
                    <td className="p-6 font-bold text-xs text-gray-600">
                      <div>{item.phone}</div>
                      <div className="text-gray-400 text-[10px]">
                        {item.email}
                      </div>
                    </td>
                    <td className="p-6 text-right text-[10px] font-black text-gray-400 uppercase">
                      {item.createdAt?.toDate().toLocaleDateString() ||
                        "Recent"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
