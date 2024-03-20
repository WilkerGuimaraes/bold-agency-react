import styled from "styled-components";
import { Colors } from "../../main.style";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 40px;
  background-color: ${Colors.background.blue};

  p {
    color: ${Colors.text.white};
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 30px;

  svg {
    font-size: 24px;
    color: ${Colors.text.white};
    transition: all 0.2s ease;

    &:hover {
      cursor: pointer;
      scale: 1.2;
    }

    &:active {
      scale: 1;
    }
  }
`;
