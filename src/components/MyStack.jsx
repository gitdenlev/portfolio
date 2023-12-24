import styled from "styled-components";
import htmlIcon from "../assets/svg/html.svg";
import cssIcon from "../assets/svg/css.svg";
import scssIcon from "../assets/svg/scss.svg";
import jsIcon from "../assets/svg/js.svg";
import reactIcon from "../assets/svg/react.svg";
import gitIcon from "../assets/svg/git.svg";
import vscodeIcon from "../assets/svg/vscode.svg";
import githubIcon from "../assets/svg/github.svg";

const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StackList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 80px;
    grid-row-gap: 20px;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;


const StackTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
  color: #9328ff;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

const MyStack = () => {
  return (
    <StackContainer id="stack">
      <StackTitle>Stack</StackTitle>
      <StackList>
        <li>
          <img src={htmlIcon} alt="html" />
        </li>
        <li>
          <img src={cssIcon} alt="css" />
        </li>
        <li>
          <img src={jsIcon} alt="scss" />
        </li>
        <li>
          <img src={scssIcon} alt="scss" />
        </li>

        <li>
          <img src={reactIcon} alt="scss" />
        </li>
        <li>
          <img src={gitIcon} alt="scss" />
        </li>
        <li>
          <img src={vscodeIcon} alt="scss" />
        </li>
        <li>
          <img src={githubIcon} alt="scss" />
        </li>
      </StackList>
    </StackContainer>
  );
};

export default MyStack;
