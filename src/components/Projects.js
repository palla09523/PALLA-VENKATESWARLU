import React from "react";
import SocialAppImage from "../images/SocialAppProfilePage.png";
import LibraryImage from "../images/LibraryManagementHomePage.png";

function Projects() {
  const projects = [
    {
      title: "Social App",
      description: "A real-time social networking platform with messaging and profiles.",
      link: "https://github.com/palla023/SocialAppWithMessenger",
      image: SocialAppImage,
    },
    {
      title: "Library Management System",
      description: "Comprehensive system for managing books with CRUD operations.",
      link: "https://github.com/palla023/LM_MERN",
      image: LibraryImage,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-center">
    <h2 className="text-4xl font-bold mb-6">Projects</h2>
    <div className="flex flex-wrap justify-center">
      {projects.map((project) => (
        <div key={project.title} className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-md mb-4 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}

export default Projects;
