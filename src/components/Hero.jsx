import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.div
      className="bg-slate-900 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <TypeIt options={{ cursor: false }}>
          <h1 className="text-3xl font-bold text-white lg:text-7xl md:text-6xl">
            Denys Levchenko
          </h1>
        </TypeIt>
        <TypeIt options={{ cursor: false }}>
          <h2 className="text-2xl text-white lg:text-5xl md:text-4xl lg:text-white">
            Frontend Developer
          </h2>
        </TypeIt>
      </motion.div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mt-4">
          <h2 className="text-lg text-white lg:text-3xl lg:w-1/2 lg:blur transition-all custom-cursor hover:blur-0">
            A continuous learner always eager to expand my knowledge and explore
            new horizons. I embrace challenges and thrive in environments that
            foster growth and development. I am passionate about learning and
            helping others discover their own potential
          </h2>
        </div>
      </motion.div>
      <motion.div
        className="mt-10 flex items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <button className="gap-2 rounded-full bg-slate-400 font-bold text-black px-4 py-2 b-2 hover:bg-slate-100 transition-all lg:text-xl">
          Download CV
        </button>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-black bg-slate-400 rounded-full p-2 transition-all hover:bg-slate-100"
          href=""
        >
          <FaGithub size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-black bg-slate-400 rounded-full p-2 transition-all hover:bg-slate-100"
          href=""
        >
          <FaLinkedin size={24} />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
