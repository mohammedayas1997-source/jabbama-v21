import React from "react";

const reviews = [
  {
    name: "Musa Ibrahim",
    location: "UK (Healthcare)",
    text: "Jabbama Travels made my dream of working in the UK a reality. Their process was transparent and fast!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
  },
  {
    name: "Fatima Yusuf",
    location: "Canada (Student)",
    text: "Highly professional service. They handled my study permit with so much care. I'm now in Toronto!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9ce29b2933?q=80&w=200",
  },
  {
    name: "Abba Kyari",
    location: "Japan (Technical)",
    text: "The best travel agency in Kano. My visa to Japan was processed without any stress. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black text-blue-900 uppercase italic">
            What Our Clients Say
          </h3>
          <p className="text-orange-500 font-bold tracking-widest mt-2 uppercase">
            Success Stories from Around the Globe
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((t, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[40px] shadow-xl border-t-8 border-orange-500 relative"
            >
              <div className="absolute -top-6 left-10 w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 italic font-medium mt-6 mb-6">
                "{t.text}"
              </p>
              <h4 className="font-black text-blue-900 uppercase tracking-tighter">
                {t.name}
              </h4>
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest">
                {t.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
