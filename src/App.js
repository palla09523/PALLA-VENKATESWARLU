import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Contact from "./components/Contact"; 
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ScrollToTop from "./components/ScrollToTop";
import ContactForm from "./components/ContactForm";
import Timeline from "./components/Timeline";


function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Timeline />
      {/* <Contact />       */}
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
