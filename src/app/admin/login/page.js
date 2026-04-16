"use client";
import React, { useState } from "react";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin"); // Idan yayi, tafi Dashboard
    } catch (error) {
      alert("Kuskure: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-12 rounded-[40px] shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-blue-900 uppercase italic">
            Jabbama Admin
          </h2>
          <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-2">
            Secure Access Only
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            placeholder="Admin Email"
            className="w-full bg-gray-50 p-5 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none font-bold"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-50 p-5 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none font-bold"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-blue-900 text-white py-5 rounded-2xl font-black uppercase italic hover:bg-orange-500 transition">
            Login to Console
          </button>
        </form>
      </div>
    </div>
  );
}
