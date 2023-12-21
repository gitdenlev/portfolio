import { NavLink } from "react-router-dom";
import logoImg from "../assets/svg/logo.svg";
import styled from "styled-components";
import RightSidebarMenu from "./RightSidebarMenu";

const Header = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 10px;
  background: #13B0F5;
  color: black;
`;

const Navbar = () => {
  return (
    <Header>
      <a>
        <span><b>gitdenlev</b></span>
      </a>
      <nav>
        <RightSidebarMenu />
      </nav>
    </Header>
  );
};

export default Navbar;
