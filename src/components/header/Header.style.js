import styled from "styled-components";
import { Colors } from "../../main.style";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${Colors.background.white1};
  background-color: ${Colors.background.blue};
`;

export const HeaderTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${Colors.text.white};

  &:hover {
    cursor: pointer;
  }
`;

export const HeaderMenu = styled.nav`
  display: flex;
  gap: 2rem;

  p {
    position: relative;
    font-size: 16px;
    font-weight: 700;
    color: ${Colors.text.white};

    &::after {
      position: absolute;
      content: "";
      left: 0;
      bottom: -6px;
      width: 100%;
      height: 2px;
      background: #e4e4e4;
      transform: translateY(10px);
      transition: 0.5s ease;
      opacity: 0;
    }

    &:hover {
      cursor: pointer;
    }

    &:hover::after {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderHamburguerMenu = styled.div`
  padding: 0 5px;

  svg {
    font-size: 32px;
    color: ${Colors.text.white};

    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
