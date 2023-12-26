import styled from "styled-components";
import card from "../assets/img/card.png";
import { FaLink } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";



const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
`;
const ProjectTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
  color: #9328ff;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

const ProjectsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 30px;
  }
  @media screen and (min-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;

const ProjectItem = styled.li`
  width: 300px;
  background-color: #363636;
  border-radius: 20px 20px 0px 0px;
`;

const ProjectImg = styled.img`
  border-radius: 20px 20px 0px 0px;
  width: 100%;
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
  cursor: pointer;
`;

const ProjectDescription = styled.div`
  padding: 10px;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectsList>
        <ProjectItem>
          <ProjectImg src={card} />
          <ProjectDescription>
            <h3 style={{ marginBottom: "10px" }}>
              In this project i development my first web-site
            </h3>
            <p>Tech Stack: HTML, CSS, JS</p>
          </ProjectDescription>
          <ProjectLinks>
            <p>
              <FaLink /> Live Preview
            </p>
            <p>
              <FaRegFileCode /> View Code
            </p>
          </ProjectLinks>
        </ProjectItem>
        <ProjectItem>
          <ProjectImg src={card} />
          <ProjectDescription>
            <h3 style={{ marginBottom: "10px" }}>
              In this project i development my first web-site
            </h3>
            <p>Tech Stack: HTML, CSS, JS</p>
          </ProjectDescription>
          <ProjectLinks>
            <p>
              <FaLink /> Live Preview
            </p>
            <p>
              <FaRegFileCode /> View Code
            </p>
          </ProjectLinks>
        </ProjectItem>
        <ProjectItem>
          <ProjectImg src={card} />
          <ProjectDescription>
            <h3 style={{ marginBottom: "10px" }}>
              In this project i development my first web-site
            </h3>
            <p>Tech Stack: HTML, CSS, JS</p>
          </ProjectDescription>
          <ProjectLinks>
            <p>
              <FaLink /> Live Preview
            </p>
            <p>
              <FaRegFileCode /> View Code
            </p>
          </ProjectLinks>
        </ProjectItem>
      </ProjectsList>
    </ProjectsContainer>
  );
};

export default Projects;
