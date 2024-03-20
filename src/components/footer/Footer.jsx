import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

import { FooterContainer, IconsContainer } from "./Footer.style";

export const Footer = () => {
  return (
    <FooterContainer>
      <p>Projeto Desenvolvido por Wilker Guimarães</p>
      <IconsContainer>
        <IoLogoLinkedin />
        <IoLogoGithub />
      </IconsContainer>
    </FooterContainer>
  );
};
