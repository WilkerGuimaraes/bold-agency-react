import styled from "styled-components";

export const ButtonStyle = styled.button`
  font-size: 13px;
  font-weight: 700;
  padding: 12px 18px;
  border: none;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:active {
    opacity: 1;
  }
`;
