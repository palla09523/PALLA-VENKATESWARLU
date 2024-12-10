import React from "react";

function Hero() {
  return (
    <section className="animated-bg h-screen text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Palla!</h1>
        <p className="text-lg mb-6">A Full Stack Developer specializing in MERN Stack</p>
        <a href="#contact" className="bg-white text-blue-600 px-6 py-2 rounded-full">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
