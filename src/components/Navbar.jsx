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
  background-color: #9328ff;
  color: #191919;
`;

const Navbar = () => {
  return (
    <>
      <Header>
      <a>
        <span><b>gitdenlev</b></span>
      </a>
      <nav>
        <RightSidebarMenu />
      </nav>
    </Header>
    </>
    
  );
};

export default Navbar;
