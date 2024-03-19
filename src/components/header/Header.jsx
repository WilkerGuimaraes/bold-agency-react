import { HeaderContainer, HeaderMenu, HeaderTitle } from "./Header.style";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>AGÊNCIA BOLD</HeaderTitle>

      <HeaderMenu>
        <p>Início</p>
        <p>Por que nós?</p>
        <p>Depoimentos</p>
        <p>Entre em contato</p>
      </HeaderMenu>
    </HeaderContainer>
  );
};
