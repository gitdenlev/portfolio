import styled from "styled-components";

const EducationContainer = styled.div`
  padding: 10px;
`;

const EducationTitle = styled.h1`
  font-size: 36px;
`;

const EducationInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EducationButton = styled.button`
  display: flex;
  align-items: center;
  background-color: green;
  
`

const Education = () => {
  return (
    <EducationContainer>
      <EducationTitle>Education</EducationTitle>
      <EducationInfoContainer>
        <h3>Zaporizhia National Technical University</h3>
        <EducationButton>Full Time</EducationButton>
      </EducationInfoContainer>
    </EducationContainer>
  );
};

export default Education;
