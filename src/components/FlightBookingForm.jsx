"use client";
import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function FlightBookingForm() {
  const [loading, setLoading] = useState(false);
  const [bookingData, setBookingData] = useState({
    passengerName: "Abdulrahman Mohammed", // Set as default per your request
    tripType: "one-way",
    departureState: "",
    arrivalState: "",
    departureDate: "",
    returnDate: "",
    airline: "",
    cabinClass: "Economy",
    adults: 1,
    children: 0,
  });

  const nigerianStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const airlines = [
    { name: "Air Peace", hubs: "Lagos, Abuja, Kano, Enugu, Port Harcourt" },
    { name: "Arik Air", hubs: "Lagos, Abuja, Benin City, Jos" },
    { name: "Max Air", hubs: "Kano, Abuja, Lagos, Katsina, Maiduguri" },
    { name: "United Nigeria Airlines", hubs: "Enugu, Abuja, Lagos, Owerri" },
    { name: "Ibom Air", hubs: "Uyo, Lagos, Abuja, Calabar" },
    { name: "Aero Contractors", hubs: "Lagos, Port Harcourt, Warri" },
    { name: "ValueJet", hubs: "Lagos, Abuja, Benin" },
    { name: "Overland Airways", hubs: "Lagos, Abuja, Akure, Ilorin" },
    { name: "Azman Air", hubs: "Kano, Lagos, Abuja, Gombe" },
    { name: "Dana Air", hubs: "Lagos, Abuja, Port Harcourt" },
  ];

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "flight_bookings"), {
        ...bookingData,
        bookedAt: new Date(),
        status: "Confirmed",
      });
      alert("Flight Booking Request Submitted Successfully!");
    } catch (error) {
      console.error("Booking Error:", error);
      alert("Error processing booking.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-2xl border-t-8 border-blue-900 my-10 rounded-xl">
      <div className="flex items-center gap-4 mb-8 border-b pb-4">
        <span className="text-4xl">✈️</span>
        <div>
          <h2 className="text-3xl font-black text-blue-900 uppercase">
            Premium Flight Reservation
          </h2>
          <p className="text-orange-600 font-bold text-sm tracking-widest">
            GLOBAL STANDARD BOOKING ENGINE
          </p>
        </div>
      </div>

      <form onSubmit={handleBooking} className="space-y-8">
        {/* TRIP TYPE TOGGLE */}
        <div className="flex gap-4 bg-gray-100 p-1 rounded-lg w-fit">
          {["one-way", "round-trip"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setBookingData({ ...bookingData, tripType: type })}
              className={`px-6 py-2 rounded-md font-black text-xs uppercase transition-all ${
                bookingData.tripType === type
                  ? "bg-blue-900 text-white shadow-md"
                  : "text-gray-500"
              }`}
            >
              {type.replace("-", " ")}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* PASSENGER NAME */}
          <div className="lg:col-span-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <label className="block text-xs font-black text-blue-900 uppercase mb-2">
              Lead Passenger Name
            </label>
            <input
              type="text"
              name="passengerName"
              value={bookingData.passengerName}
              readOnly
              className="w-full bg-transparent border-b-2 border-blue-900 text-xl font-bold outline-none text-blue-800"
            />
          </div>

          {/* DEPARTURE */}
          <div className="flex flex-col">
            <label className="text-xs font-black text-slate-500 uppercase mb-1">
              From (Origin State)
            </label>
            <select
              name="departureState"
              onChange={handleChange}
              className="p-3 bg-gray-50 border-2 border-transparent border-b-blue-900 focus:bg-white outline-none font-bold"
              required
            >
              <option value="">Select Departure</option>
              {nigerianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* ARRIVAL */}
          <div className="flex flex-col">
            <label className="text-xs font-black text-slate-500 uppercase mb-1">
              To (Destination State)
            </label>
            <select
              name="arrivalState"
              onChange={handleChange}
              className="p-3 bg-gray-50 border-2 border-transparent border-b-orange-500 focus:bg-white outline-none font-bold"
              required
            >
              <option value="">Select Destination</option>
              {nigerianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* AIRLINE PREFERENCE */}
          <div className="flex flex-col">
            <label className="text-xs font-black text-slate-500 uppercase mb-1">
              Preferred Airline
            </label>
            <select
              name="airline"
              onChange={handleChange}
              className="p-3 bg-gray-50 border-2 border-transparent border-b-blue-900 outline-none font-bold text-blue-900"
              required
            >
              <option value="">Best Available</option>
              {airlines.map((air) => (
                <option key={air.name} value={air.name}>
                  {air.name}
                </option>
              ))}
            </select>
            <p className="text-[10px] mt-1 text-gray-400 italic">
              Major Hubs:{" "}
              {airlines.find((a) => a.name === bookingData.airline)?.hubs ||
                "Domestic Coverage"}
            </p>
          </div>

          {/* DATES */}
          <div className="flex flex-col">
            <label className="text-xs font-black text-slate-500 uppercase mb-1">
              Departure Date
            </label>
            <input
              type="date"
              name="departureDate"
              onChange={handleChange}
              className="p-3 border-b-2 border-gray-300 outline-none focus:border-blue-900 font-bold"
              required
            />
          </div>

          {bookingData.tripType === "round-trip" && (
            <div className="flex flex-col">
              <label className="text-xs font-black text-slate-500 uppercase mb-1">
                Return Date
              </label>
              <input
                type="date"
                name="returnDate"
                onChange={handleChange}
                className="p-3 border-b-2 border-gray-300 outline-none focus:border-blue-900 font-bold"
              />
            </div>
          )}

          {/* CLASS */}
          <div className="flex flex-col">
            <label className="text-xs font-black text-slate-500 uppercase mb-1">
              Travel Class
            </label>
            <select
              name="cabinClass"
              onChange={handleChange}
              className="p-3 border-b-2 border-gray-300 outline-none font-bold"
            >
              <option value="Economy">Economy</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business Class">Business Class</option>
              <option value="First Class">First Class</option>
            </select>
          </div>
        </div>

        {/* PASSENGER COUNT */}
        <div className="flex gap-10 p-6 bg-slate-50 rounded-lg">
          <div className="flex items-center gap-4">
            <span className="font-black text-blue-900 uppercase text-xs">
              Adults:
            </span>
            <input
              type="number"
              name="adults"
              min="1"
              defaultValue="1"
              onChange={handleChange}
              className="w-12 bg-transparent border-b-2 border-blue-900 text-center font-bold"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="font-black text-blue-900 uppercase text-xs">
              Children:
            </span>
            <input
              type="number"
              name="children"
              min="0"
              defaultValue="0"
              onChange={handleChange}
              className="w-12 bg-transparent border-b-2 border-blue-900 text-center font-bold"
            />
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-5 rounded-lg font-black text-xl uppercase tracking-tighter shadow-xl transition-all ${
            loading
              ? "bg-gray-400"
              : "bg-blue-900 text-white hover:bg-orange-600"
          }`}
        >
          {loading ? "Verifying Availability..." : "Search & Book Flights"}
        </button>
      </form>
    </div>
  );
}
