import styled from "styled-components";
import { Colors } from "../../main.style";

export const MobileMenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const MobileMenuEscapeArea = styled.div`
  width: 100%;
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99;
  height: 100vh;
  min-width: 75%;
  background-color: ${Colors.background.mobileMenu};
`;

export const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 30px 10%;

  svg {
    font-size: 40px;
    color: ${Colors.text.white};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;

  p {
    position: relative;
    font-size: 16px;
    font-weight: 700;
    padding: 5px;
    text-decoration: none;
    color: ${Colors.text.white};

    &:hover {
      cursor: pointer;
    }
  }
`;
