import React from "react";

function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form
        action="https://formspree.io/f/xwpkjnvb" 
        method="POST"
        className="max-w-xl mx-auto bg-white p-6 shadow-lg rounded-lg"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
