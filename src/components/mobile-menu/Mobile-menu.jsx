import { IoClose } from "react-icons/io5";

import {
  MobileMenuContainer,
  MobileMenuEscapeArea,
  MobileMenuContent,
  CloseIconContainer,
  MenuList,
} from "./Mobile-menu.style";

export const MobileMenu = ({ isVisible, toggleMobileMenu }) => {
  const handleCloseIconClick = () => {
    toggleMobileMenu();
  };

  return (
    <MobileMenuContainer isVisible={isVisible}>
      <MobileMenuEscapeArea onClick={toggleMobileMenu} />
      <MobileMenuContent>
        <CloseIconContainer>
          <IoClose onClick={handleCloseIconClick} />
        </CloseIconContainer>

        <MenuList>
          <a href="#">Início</a>
          <a href="#">Por que nós?</a>
          <a href="#">Depoimentos</a>
          <a href="#">Entre em contato</a>
        </MenuList>
      </MobileMenuContent>
    </MobileMenuContainer>
  );
};
