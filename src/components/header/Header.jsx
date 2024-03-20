import { HeaderContainer, HeaderMenu, HeaderTitle } from "./Header.style";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>AGÊNCIA BOLD</HeaderTitle>

      <HeaderMenu>
        <a href="#">Início</a>
        <a href="#">Por que nós?</a>
        <a href="#">Depoimentos</a>
        <a href="#">Entre em contato</a>
      </HeaderMenu>
    </HeaderContainer>
  );
};
