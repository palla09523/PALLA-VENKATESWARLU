import React from "react";

function Skills() {
  const skills = [
    { name: "HTML5", logo: "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5-thumbnail.png" },
    { name: "CSS3", logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" },
    { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    { name: "React.js", logo: "https://cdn.auth0.com/blog/react-js/react.png" },
    { name: "Redux", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQV988lcKigQi-inoDhGZt4rQN2ENqgaopMA&s" },
    { name: "Node.js", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrISpgedNtHAGlKBWl0ftrBe4B1JiGwDTP2g&s" },
    { name: "Express.js", logo: "https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png" },
    { name: "MongoDB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXf-xZMRVO-B6xuN1L9kM39lVwRbVSdHYSA&s" },
    { name: "Git", logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
   
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <div key={skill.name} className="m-4 text-center">
            <div className="skill-icon w-24 h-24 rounded-full overflow-hidden mx-auto">
              <img src={skill.logo} alt={skill.name} className="w-full h-full object-cover" />
            </div>
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
