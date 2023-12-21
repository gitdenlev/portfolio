import React, { useState } from "react";
import { push as Menu } from "react-burger-menu";
import { Spiral as Hamburger } from "hamburger-react";
import "./RideSidebarMenu.css";

const RightSidebarMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        <Hamburger toggled={isMenuOpen} toggle={handleMenuToggle} color="#CCC" />
        <Menu right isOpen={isMenuOpen} customBurgerIcon={false}>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="#stack">
            MyStack
          </a>
          <a id="projects" className="menu-item" href="/projects">
            Projects
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      </div>
    </>
  );
};

export default RightSidebarMenu;
