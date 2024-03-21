import styled from "styled-components";

import bannerImg from "../../assets/BANNER-IMG.png";
import { Colors } from "../../main.style";

export const BannerContainer = styled.div`
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
`;

export const BannerContent = styled.div`
  text-align: center;
  padding: 80px 8%;

  h1 {
    font-size: 40px;
    font-weight: 400;
    color: ${Colors.text.white};
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin: 30px 0;
    color: ${Colors.text.white};
  }
`;
