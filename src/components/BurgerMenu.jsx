import { slide as Menu } from "react-burger-menu";
import { CiBurger } from "react-icons/ci";

const BurgerMenu = () => {
  return (
    <div className="md:hidden lg:hidden bg-transparent">
      <CiBurger size={40} color="#fff" />
      <Menu
        right
        className="bg-sky-950 text-white p-4 mt-3.5 rounded-lg shadow-lg"
      >
        <ul className="flex items-center gap-20 mr-10">
          <li className="w-2/3 bg-slate-300 text-black px-4 py-2 rounded-lg hover:bg-slate-100 transition-all">
            <a href="">About me</a>
          </li>
          <li className="w-2/3 bg-slate-300 text-black px-4 py-2 rounded-lg hover:bg-slate-100 transition-all">
            <a href="">Works</a>
          </li>
          <li className="w-2/3 bg-slate-300 text-black px-4 py-2 rounded-lg hover:bg-slate-100 transition-all">
            <a href="">Experience</a>
          </li>
          <li className="w-2/3 bg-slate-300 text-black px-4 py-2 rounded-lg hover:bg-slate-100 transition-all">
            <a href="">Contact me</a>
          </li>
        </ul>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
