import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
    }
`;

export const Colors = {
  background: {
    white1: "#fff",
    white2: "#fbfcfe",
    yellow: "#ffdd33",
    blue: "#255aff",
  },
  text: {
    white: "#fff",
    gray1: "#ccc",
    gray2: "#7e92ac",
    black: "#000",
    blue: "#0f3fd3",
    title: "#333",
    paragraph: "#707070",
  },
  icon: {
    checkbox: "00aa00",
  },
};
