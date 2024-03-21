import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { motion } from "framer-motion";

const Header = () => {
  // Состояние для текущей активной страницы
  const [activePage, setActivePage] = useState("About");

  // Функция для обновления текущей активной страницы
  const handleSetActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-4 sticky top-0 z-50 bg-slate-900"
    >
      <nav className="flex items-center justify-between lg:justify-center mt-4">
        <a href=""></a>
        <ul className="bg-slate-800 px-4 h-20 rounded-full hidden lg:flex items-center gap-10 md:flex items-center gap-10 mr-10">
          <li
            className={`rounded-full font-bold text-slate-300 px-4 py-2 b-2 hover:text-slate-100 transition-all ${
              activePage === "About" ? "bg-slate-400 text-slate-900" : ""
            }`}
          >
            <a href="" onClick={() => handleSetActivePage("About")}>
              About
            </a>
          </li>
          <li
            className={`rounded-full font-bold text-slate-300 px-4 py-2 b-2 hover:text-slate-100 transition-all ${
              activePage === "Skills" ? "bg-slate-400 text-slate-900" : ""
            }`}
          >
            <a href="#skills" onClick={() => handleSetActivePage("Skills")}>
              Skills
            </a>
          </li>
          <li
            className={`rounded-full font-bold text-slate-300 px-4 py-2 b-2 hover:text-slate-100 transition-all ${
              activePage === "Works" ? "bg-slate-400 text-slate-900" : ""
            }`}
          >
            <a href="" onClick={() => handleSetActivePage("Works")}>
              Works
            </a>
          </li>
          <li
            className={`rounded-full font-bold text-slate-300 px-4 py-2 b-2 hover:text-slate-100 transition-all ${
              activePage === "Experience" ? "bg-slate-400 text-slate-900" : ""
            }`}
          >
            <a href="" onClick={() => handleSetActivePage("Experience")}>
              Experience
            </a>
          </li>
          <li
            className={`rounded-full font-bold text-slate-300 px-4 py-2 b-2 hover:text-slate-100 transition-all ${
              activePage === "Contact" ? "bg-slate-400 text-slate-900" : ""
            }`}
          >
            <a href="" onClick={() => handleSetActivePage("Contact")}>
              Contact me
            </a>
          </li>
        </ul>
        <BurgerMenu />
      </nav>
    </motion.header>
  );
};

export default Header;
