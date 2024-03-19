import styled from "styled-components";
import { Colors } from "../../main.style";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px;
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
    font-size: 16px;
    font-weight: 700;
    list-style: none;
    color: ${Colors.text.white};

    &:hover {
      cursor: pointer;
    }
  }
`;
