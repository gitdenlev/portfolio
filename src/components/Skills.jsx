import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Задайте ваші навички
    const skillsData = [
      { name: "HTML", image: "/public/html.svg" },
      { name: "CSS", image: "/public/css.svg" },
      { name: "JavaScript", image: "/public/js.svg" },
      { name: "React.js", image: "/public/react.svg" },
      { name: "Scss", image: "/public/sass.svg" },
      { name: "TailwindCSS", image: "/public/tailwind.svg" },
      { name: "Next.js", image: "/public/nextjs.svg" },
      { name: "Git", image: "/public/git.svg" },
      { name: "GitHub", image: "/public/github.svg" },
      { name: "VS Code", image: "/public/vscode.svg" },
      { name: "Figma", image: "/public/figma.svg" },
    ];

    setSkills(skillsData);
  }, []);

  return (
    <motion.div id="skills" className="p-8">
      <h1 className="text-4xl text-center text-white font-bold mb-8 lg:text-5xl">
        My Skills
      </h1>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-800 rounded-lg shadow-lg hover:shadow-2xl hover:bg-slate-700 transition-all"
          >
            <img
              src={skill.image}
              alt={skill.name}
              width={50}
              className="mb-2"
            />
            <p className="text-lg text-white">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
