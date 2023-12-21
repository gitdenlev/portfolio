import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
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
`;

const StackItem = styled.li``;

const StackTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
  color: #13b0f5;
`;



const MyStack = () => {
  return (
    <StackContainer id="stack">
      <StackTitle>My Stack</StackTitle>
      <h3 style={{display: "flex", flexWrap: "wrap", width: "225px" }}>
        <i>Technologies I’ve been working with recently</i>
      </h3>
      <StackList>
        <StackItem>
          <img src={htmlIcon} alt="html" />
        </StackItem>
        <StackItem>
          <img src={cssIcon} alt="css" />
        </StackItem>
        <StackItem>
          <img src={jsIcon} alt="scss" />
        </StackItem>
        <StackItem>
          <img src={scssIcon} alt="scss" />
        </StackItem>

        <StackItem>
          <img src={reactIcon} alt="scss" />
        </StackItem>
        <StackItem>
          <img src={gitIcon} alt="scss" />
        </StackItem>
        <StackItem>
          <img src={vscodeIcon} alt="scss" />
        </StackItem>
        <StackItem>
          <img src={githubIcon} alt="scss" />
        </StackItem>
      </StackList>
    </StackContainer>
  );
};

export default MyStack;
