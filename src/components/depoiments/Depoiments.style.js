import styled from "styled-components";
import { Colors } from "../../main.style";

export const DepoimentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.background.white2};
  padding: 80px 0;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin: 0 auto;

  h1 {
    font-size: 45px;
  }
`;

export const CarouselContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Teste = styled.div`
  background-color: red;
  overflow: hidden;
  border-radius: 25px;
`;

export const Card = styled.div`
  border-radius: 25px;
  background-color: ${Colors.background.white1};
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  row-gap: 5px;
  padding: 25px 0;

  span {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${Colors.background.blue};
    border-radius: 25px 25px 0 25px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: -40px;
      height: 40px;
      width: 40px;
      background-color: ${Colors.background.blue};
    }

    &::after {
      border-radius: 0 25px 0 0;
      background-color: ${Colors.background.white1};
    }
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  padding: 3px;
  border-radius: 50%;
  background-color: ${Colors.background.white1};
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid ${Colors.background.blue};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;

  h3 {
    font-size: 18px;
    font-weight: 500;
    color: ${Colors.text.title};
  }

  p {
    font-size: 14px;
    color: ${Colors.text.paragraph};
    text-align: center;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0;

  svg {
    font-size: 18px;
    color: ${Colors.icon.socials};
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      scale: 1.2;
    }

    &:active {
      scale: 1;
    }
  }
`;
