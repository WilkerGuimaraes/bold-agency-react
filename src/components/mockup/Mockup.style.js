import styled from "styled-components";

import backgroundImage from "../../assets/bg.png";
import { Colors } from "../../main.style";

export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
`;

export const MockupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  gap: 30px;
  text-align: center;
  padding: 40px 10px;

  h1 {
    font-size: 50px;
    font-weight: 400;
    color: ${Colors.text.white};
  }

  p {
    color: ${Colors.text.white};
  }
`;

export const MockupImage = styled.img`
  max-width: 90%;
  max-height: 550px;
  padding: 20px;
  background: ${Colors.background.white1};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(177, 177, 177, 0.9);
`;
