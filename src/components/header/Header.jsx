import { RxHamburgerMenu } from "react-icons/rx";

import {
  HeaderContainer,
  HeaderHamburguerMenu,
  HeaderMenu,
  HeaderTitle,
} from "./Header.style";

export const Header = ({ toggleMobileMenu }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>AGÊNCIA BOLD</HeaderTitle>

      <HeaderMenu>
        <a href="#">Início</a>
        <a href="#">Por que nós?</a>
        <a href="#">Depoimentos</a>
        <a href="#">Entre em contato</a>
      </HeaderMenu>

      <HeaderHamburguerMenu onClick={toggleMobileMenu}>
        <RxHamburgerMenu />
      </HeaderHamburguerMenu>
    </HeaderContainer>
  );
};
