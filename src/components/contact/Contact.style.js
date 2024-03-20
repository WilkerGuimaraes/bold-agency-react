import styled from "styled-components";
import { Colors } from "../../main.style";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  padding: 0 10%;
`;

export const FormContent = styled.div`
  max-width: 568px;
  width: 100%;

  h1 {
    font-size: 50px;
    text-align: center;
    margin-bottom: 30px;
  }
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 15px;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border: 1px solid ${Colors.input.border};
  border-radius: 8px;
  background-color: ${Colors.input.background};

  &::placeholder {
    color: ${Colors.input.placeholder};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin: 10px 0;
  padding: 15px;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border: 1px solid ${Colors.input.border};
  border-radius: 8px;
  background-color: ${Colors.input.background};
  resize: none;

  &::placeholder {
    color: ${Colors.input.placeholder};
  }
`;
