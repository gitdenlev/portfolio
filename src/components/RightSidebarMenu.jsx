import { useState } from "react";
import { push as Menu } from "react-burger-menu";
import { Spiral as Hamburger } from "hamburger-react";
import "./RideSidebarMenu.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const RightSidebarMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        <Hamburger
          toggled={isMenuOpen}
          toggle={handleMenuToggle}
          color="#191919"
        />
        <Menu right isOpen={isMenuOpen} customBurgerIcon={false}>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="#stack">
            Stack
          </a>
          <a id="projects" className="menu-item" href="/projects">
            Projects
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <ul
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <li>
              <a href="">
                <FaGithub size={25} color="#CCC" />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin size={25} color="#CCC" />
              </a>
            </li>
          </ul>
        </Menu>
      </div>
    </>
  );
};

export default RightSidebarMenu;
