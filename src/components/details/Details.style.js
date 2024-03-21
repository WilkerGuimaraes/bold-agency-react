import styled from "styled-components";
import { Colors } from "../../main.style";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  background-color: ${Colors.background.white2};
`;

export const DetailsTitle = styled.div`
  text-align: center;
  padding: 70px 0;

  h1 {
    font-size: 45px;
  }

  p {
    color: ${Colors.text.gray2};
    padding-top: 10px;
  }
`;

export const DetailsContent = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 4%;
`;

export const DetailsCard = styled.div`
  width: 536px;
  padding: 40px 30px;
  border-radius: 20px;
  background-color: ${Colors.background.white1};
  box-shadow: 0 20px 40px #2426721c;

  h3 {
    margin: 20px 0;
  }

  p {
    color: ${Colors.text.gray2};
  }
`;
