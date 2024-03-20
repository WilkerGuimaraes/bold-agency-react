import styled from "styled-components";
import { Colors } from "../../main.style";

export const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 5%;
`;

export const BenefitsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 0 2%;
  width: 50%;

  h1 {
    font-size: 2rem;
  }
`;

export const BenefitsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  p {
    font-size: 1rem;
    color: ${Colors.text.gray2};
  }
`;

export const BenefitsImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const BenefitsImage = styled.img`
  width: 100%;
`;
