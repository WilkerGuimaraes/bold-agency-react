import { IoClose } from "react-icons/io5";

import {
  MobileMenuContainer,
  MobileMenuEscapeArea,
  MobileMenuContent,
  CloseIconContainer,
  MenuList,
} from "./Mobile-menu.style";

export const MobileMenu = ({ isVisible, toggleMobileMenu, smoothScroll }) => {
  const handleCloseIconClick = () => {
    toggleMobileMenu();
  };

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      smoothScroll(sectionId);
      toggleMobileMenu();
    }, 200);
  };

  return (
    <MobileMenuContainer isVisible={isVisible}>
      <MobileMenuEscapeArea onClick={toggleMobileMenu} />
      <MobileMenuContent>
        <CloseIconContainer>
          <IoClose onClick={handleCloseIconClick} />
        </CloseIconContainer>

        <MenuList>
          <p onClick={() => scrollToSection("details")}>Por que nós?</p>
          <p onClick={() => scrollToSection("depoiments")}>Depoimentos</p>
          <p onClick={() => scrollToSection("contact")}>Entre em contato</p>
        </MenuList>
      </MobileMenuContent>
    </MobileMenuContainer>
  );
};
