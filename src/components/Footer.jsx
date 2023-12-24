import styled from "styled-components"
import { FaGithub, FaLinkedin } from "react-icons/fa";



const MyFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #9328ff;
  color: #191919;
  margin-top: 100px;
`

const InfoList = styled.ul`
  display: flex;
  gap: 10px;
  font-size: 10px;
  align-items: center;
  justify-content: center;
`

const Footer = () => {
  return (
    <MyFooter>
        <a>
        <span><b>gitdenlev</b></span>
      </a>
      <InfoList>
        <li><FaGithub size={25} /></li>
        <li><FaLinkedin size={25} /></li>
      </InfoList>
    </MyFooter>
  )
}

export default Footer;