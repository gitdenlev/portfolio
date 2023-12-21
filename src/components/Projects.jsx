import styled from "styled-components";
import card from "../assets/img/card.png";
import { FaLink } from "react-icons/fa";





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
  color: #13b0f5;
`;

const ProjectsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

const ProjectItem = styled.li`
  width: 300px;
  background-color: #363636;
  border-radius: 20px 20px 0px 0px;
`;

const ProjectImg = styled.img`
  border-radius: 20px 20px 0px 0px;
  width: 300px;
`;

const ProjectText = styled.div`
    padding: 10px;
`;

const Projects = () => {
  const scrollTo = () => {
    window.scrollTo(0,0);
  }
  return (
    <ProjectsContainer>
      <ProjectTitle>My Projects</ProjectTitle>
      <h3>
        <i>Things I've dev so far</i>
      </h3>
      <ProjectsList>
        <ProjectItem>
          <ProjectImg src={card} />
          <ProjectText>
            <p>
            <FaLink /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              voluptatum!
            </p>
            <button>click</button>
          </ProjectText>
        </ProjectItem>
        <ProjectItem>
          <ProjectImg src={card} />
          <ProjectText>
            <p>
            <FaLink /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              voluptatum!
            </p>
            <button>click</button>
          </ProjectText>
        </ProjectItem>
        <ProjectItem>
          <ProjectImg src={card} />
          <ProjectText>
            <p>
            <FaLink /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              voluptatum!
            </p>
            <button>click</button>
          </ProjectText>
        </ProjectItem>
        <button onClick={scrollTo}>UP</button>
      </ProjectsList>
    </ProjectsContainer>
  );
};

export default Projects;
