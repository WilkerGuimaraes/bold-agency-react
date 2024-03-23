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
          <p>Por que nós?</p>
          <p>Depoimentos</p>
          <p>Entre em contato</p>
        </MenuList>
      </MobileMenuContent>
    </MobileMenuContainer>
  );
};
