"use client";
import React, { useState } from "react";

const initialComments = [
  {
    id: 1,
    name: "Musa Ibrahim",
    location: "Kano",
    text: "Jabbama Travels made my dream of working in the UK a reality. Fast and transparent!",
    reply: "Thank you Musa! We are glad to be part of your journey.",
  },
  {
    id: 2,
    name: "Fatima Yusuf",
    location: "Kaduna",
    text: "Highly professional service. They handled my Canada study permit with so much care.",
    reply: "Safe travels to Toronto, Fatima! Wishing you success.",
  },
  {
    id: 3,
    name: "Abba Mohammed",
    location: "Lagos",
    text: "The best travel agency. My visa to Japan was processed without any stress. Highly recommended!",
    reply: "Arigato, Abba! Enjoy your technical training in Japan.",
  },
  {
    id: 4,
    name: "Zainab Aliyu",
    location: "Abuja",
    text: "Na gode kwarai da gaske. My Umrah trip was so peaceful and well-organized.",
    reply: "Alhamdulillah, Zainab. May your prayers be accepted.",
  },
  {
    id: 5,
    name: "Umar Faruk",
    location: "Sokoto",
    text: "Professionalism at its peak. Their guidance on Australia work visa is top-notch.",
    reply: "Thank you Umar! Australia awaits you.",
  },
  {
    id: 6,
    name: "Aisha Bello",
    location: "Katsina",
    text: "I was worried about my IELTS, but their coaching and advice helped me pass and get my UK visa.",
    reply: "Success is yours, Aisha. Congratulations once again!",
  },
  {
    id: 7,
    name: "Chidi Okechukwu",
    location: "Enugu",
    text: "Great service! Secured my flight and visa to USA within weeks.",
    reply: "We appreciate your trust in us, Chidi.",
  },
  {
    id: 8,
    name: "Binta Muhammad",
    location: "Gombe",
    text: "Jabbama Travels is the only agency I trust for Hajj and Umrah services in the North.",
    reply: "It is an honor to serve you, Binta.",
  },
  {
    id: 9,
    name: "Suleiman Danladi",
    location: "Bauchi",
    text: "The South Korea E-9 visa process was explained clearly. Now I have my contract.",
    reply: "Hard work pays, Suleiman. Best of luck in Korea.",
  },
  {
    id: 10,
    name: "Maryam Hassan",
    location: "Jigawa",
    text: "Fastest visa processing I've ever experienced. No hidden charges.",
    reply: "Integrity is our watchword, Maryam.",
  },
  {
    id: 11,
    name: "Kabiru Lawal",
    location: "Zamfara",
    text: "Their student portal is very easy to use. I applied for my Masters in Cyprus through them.",
    reply: "We hope to see you excel in your studies, Kabiru.",
  },
  {
    id: 12,
    name: "Hadiza Idris",
    location: "Yobe",
    text: "Jabbama Travels is reliable. My sister is already in UK through their healthcare scheme.",
    reply: "Family success is our joy, Hadiza!",
  },
  {
    id: 13,
    name: "Ibrahim Khalid",
    location: "Kebbi",
    text: "The flight booking rates are very affordable compared to other agencies.",
    reply: "We always strive for the best prices, Ibrahim.",
  },
  {
    id: 14,
    name: "Nuhu Adamu",
    location: "Adamawa",
    text: "I highly recommend their services for anyone looking for legitimate work permits abroad.",
    reply: "Thank you for the recommendation, Nuhu!",
  },
  {
    id: 15,
    name: "Sadiya Bashir",
    location: "Taraba",
    text: "Excellent customer service. They answer every question with patience.",
    reply: "Our clients are our priority, Sadiya.",
  },
  {
    id: 16,
    name: "Aminu Yahaya",
    location: "Niger",
    text: "Finally, an agency that doesn't tell lies. My Canada visa is out!",
    reply: "The truth always wins. Congratulations, Aminu!",
  },
  {
    id: 17,
    name: "Halima Sani",
    location: "Kwara",
    text: "Their office in Kano is easy to find and the staff are very welcoming.",
    reply: "You are always welcome at Jabbama, Halima.",
  },
  {
    id: 18,
    name: "Mustapha Gwadabe",
    location: "Kano",
    text: "I got my South Africa tourist visa in record time. Thanks Jabbama!",
    reply: "Enjoy your vacation, Mustapha!",
  },
  {
    id: 19,
    name: "Rakiya Shuaibu",
    location: "Borno",
    text: "Despite the distance, they handled my documents via DHL and everything went smoothly.",
    reply: "Distance is not a barrier to our service, Rakiya.",
  },
  {
    id: 20,
    name: "Balarabe Junaidu",
    location: "Plateau",
    text: "Top quality travel solutions. I will definitely use them again for my next trip.",
    reply: "We look forward to serving you again, Balarabe.",
  },
];

export default function Testimonials() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState({ name: "", text: "" });
  const [adminReply, setAdminReply] = useState({ id: null, text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.text) {
      const addedComment = {
        id: Date.now(),
        name: newComment.name,
        location: "Verified User",
        text: newComment.text,
        reply: null,
      };
      setComments([addedComment, ...comments]);
      setNewComment({ name: "", text: "" });
    }
  };

  const handleAdminSubmitReply = (id) => {
    if (!adminReply.text) return;
    setComments(
      comments.map((c) => (c.id === id ? { ...c, reply: adminReply.text } : c)),
    );
    setAdminReply({ id: null, text: "" });
  };

  return (
    <section className="py-24 bg-gray-50 px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black text-blue-900 uppercase italic">
            Client Feedback & Discussions
          </h3>
          <div className="w-20 h-2 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* --- LEFT: FORM DON RUBUTA COMMENT --- */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[30px] shadow-xl border-b-8 border-orange-500 sticky top-10">
              <h4 className="text-xl font-black text-blue-900 mb-6 uppercase">
                Leave a Comment
              </h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-orange-500 outline-none font-bold transition-all"
                  value={newComment.name}
                  onChange={(e) =>
                    setNewComment({ ...newComment, name: e.target.value })
                  }
                />
                <textarea
                  placeholder="Share your experience..."
                  className="w-full p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-orange-500 outline-none font-bold h-32 transition-all"
                  value={newComment.text}
                  onChange={(e) =>
                    setNewComment({ ...newComment, text: e.target.value })
                  }
                ></textarea>
                <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-black uppercase hover:bg-orange-600 transition shadow-lg">
                  Post Comment
                </button>
              </form>
            </div>
          </div>

          {/* --- RIGHT: SCROLLABLE COMMENT BOX --- */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[40px] shadow-2xl border-2 border-gray-100 overflow-hidden">
              <div className="bg-blue-900 p-6">
                <h4 className="text-white font-black uppercase tracking-widest flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                  Live Discussions ({comments.length})
                </h4>
              </div>

              {/* Akwatin Scroll */}
              <div className="h-[600px] overflow-y-auto p-8 space-y-8 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-100">
                {comments.map((c) => (
                  <div
                    key={c.id}
                    className="border-b border-gray-100 pb-8 last:border-0"
                  >
                    {/* User Comment */}
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-black border-2 border-blue-200 flex-shrink-0">
                        {c.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-black text-blue-900 uppercase text-xs">
                            {c.name}
                          </h4>
                          <span className="text-[9px] font-bold text-orange-500 uppercase bg-orange-50 px-2 py-1 rounded">
                            {c.location}
                          </span>
                        </div>
                        <p className="text-gray-700 font-medium text-sm leading-relaxed bg-gray-50 p-4 rounded-2xl rounded-tl-none">
                          {c.text}
                        </p>

                        {/* Admin Action (Dashboard-style) */}
                        <div className="mt-3 flex items-center gap-4">
                          {!c.reply && (
                            <button
                              onClick={() =>
                                setAdminReply({ id: c.id, text: "" })
                              }
                              className="text-[10px] font-black text-blue-600 hover:text-orange-600 uppercase transition"
                            >
                              [ Admin Reply ]
                            </button>
                          )}
                        </div>

                        {/* Admin Reply Input Area */}
                        {adminReply.id === c.id && (
                          <div className="mt-4 bg-orange-50 p-4 rounded-2xl border-2 border-orange-200">
                            <textarea
                              className="w-full p-3 rounded-xl border-none outline-none text-sm font-bold text-blue-900 bg-white shadow-inner h-20"
                              placeholder="Write admin response..."
                              value={adminReply.text}
                              onChange={(e) =>
                                setAdminReply({
                                  ...adminReply,
                                  text: e.target.value,
                                })
                              }
                            ></textarea>
                            <div className="flex justify-end gap-2 mt-2">
                              <button
                                onClick={() =>
                                  setAdminReply({ id: null, text: "" })
                                }
                                className="px-3 py-1 text-[10px] font-black text-gray-500"
                              >
                                CANCEL
                              </button>
                              <button
                                onClick={() => handleAdminSubmitReply(c.id)}
                                className="px-4 py-1 bg-orange-600 text-white text-[10px] font-black rounded-lg"
                              >
                                SEND REPLY
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Display Admin Reply */}
                        {c.reply && (
                          <div className="flex gap-3 items-start mt-4 ml-4 lg:ml-8">
                            <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white font-black text-[10px] flex-shrink-0">
                              JT
                            </div>
                            <div className="flex-1 bg-blue-50 p-4 rounded-2xl rounded-tl-none border-l-4 border-blue-900 shadow-sm">
                              <h5 className="font-black text-blue-900 uppercase text-[9px] mb-1 flex items-center gap-2">
                                Admin Reply{" "}
                                <span className="text-blue-500">✓</span>
                              </h5>
                              <p className="text-blue-900 font-bold text-xs italic leading-snug">
                                {c.reply}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
