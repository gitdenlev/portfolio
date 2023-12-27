import styled from "styled-components";
import user from "../assets/img/me.png";
import TypeIt from "typeit-react";


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

const HeroImg = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;

const HeroTitle = styled.div``;

const Title = styled.h1`
  margin-top: 20px;
  font-size: 24px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 767px) {
    font-size: 34px;
  }
`;

const Description = styled.p`
  margin-top: 15px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImg src={user} alt="me" />
      <HeroTitle>
        <Title>
          Hi, my name is Denys
        </Title>
        <Description>
          I am a Frontend Developer, a continuous learner always eager to expand
          my knowledge and explore new horizons. I embrace challenges and thrive
          in environments that foster growth and development. I am passionate
          about learning and helping others discover their own potential
        </Description>
      </HeroTitle>
    </HeroContainer>
  );
};

export default Hero;
