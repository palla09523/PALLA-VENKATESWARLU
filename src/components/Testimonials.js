import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Rakesh",
      feedback: "Palla is an exceptional developer with great attention to detail.",
      role: "Team Lead",
    },
    {
      name: "Steve Hale",
      feedback: "Great at solving complex problems and delivering on time.",
      role: "Client",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6">Testimonials</h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((t, index) => (
          <div key={index} className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <p className="italic mb-4">"{t.feedback}"</p>
              <h3 className="font-bold">{t.name}</h3>
              <p className="text-sm text-gray-600">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
