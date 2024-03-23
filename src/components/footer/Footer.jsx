import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

import { FooterContainer, IconsContainer } from "./Footer.style";

export const Footer = () => {
  return (
    <FooterContainer>
      <p>Projeto Desenvolvido por Wilker Guimarães</p>
      <IconsContainer>
        <a
          href="https://www.linkedin.com/in/wilker-guimaraes-944a93175/"
          target="_blank"
        >
          <IoLogoLinkedin />
        </a>
        <a href="https://github.com/WilkerGuimaraes" target="_blank">
          <IoLogoGithub />
        </a>
      </IconsContainer>
    </FooterContainer>
  );
};
