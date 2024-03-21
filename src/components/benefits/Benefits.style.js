import styled from "styled-components";
import { Colors } from "../../main.style";

export const BenefitsContainer = styled.div`
  display: flex;
  padding: 50px 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
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
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BenefitsImage = styled.img`
  width: 100%;
`;
