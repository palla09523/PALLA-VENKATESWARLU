import React from "react";

function Header() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Palla Venkateswarlu</h1>
        <nav className="flex items-center">
          <a href="#about" className="px-4">About</a>
          <a href="#skills" className="px-4">Skills</a>
          <a href="#projects" className="px-4">Projects</a>
          <a href="#testimonials" className="px-4">Testimonials</a>
          <a href="#contact" className="px-4">Contact</a>
        </nav>
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/palla-venkatesh-59106a175/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/palla023"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2"
          >
            GitHub
          </a>
          <a
            href="https://drive.google.com/file/d/1r15Cnjb7yEscyYWb_PPRvk7VD9oe1Jk3/view?usp=drive_link"
            download
            className="bg-blue-600 px-4 py-2 rounded text-white ml-4"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

