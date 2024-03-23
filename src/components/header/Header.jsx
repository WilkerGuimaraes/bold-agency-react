import { RxHamburgerMenu } from "react-icons/rx";

import {
  HeaderContainer,
  HeaderHamburguerMenu,
  HeaderMenu,
  HeaderTitle,
} from "./Header.style";

export const Header = ({ id, toggleMobileMenu, smoothScroll }) => {
  const scrollToSection = (sectionId) => {
    smoothScroll(sectionId);
  };

  return (
    <HeaderContainer id={id}>
      <HeaderTitle>AGÊNCIA BOLD</HeaderTitle>

      <HeaderMenu>
        <p onClick={() => scrollToSection("details")}>Por que nós?</p>
        <p onClick={() => scrollToSection("depoiments")}>Depoimentos</p>
        <p onClick={() => scrollToSection("contact")}>Entre em contato</p>
      </HeaderMenu>

      <HeaderHamburguerMenu onClick={toggleMobileMenu}>
        <RxHamburgerMenu />
      </HeaderHamburguerMenu>
    </HeaderContainer>
  );
};
