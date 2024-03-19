import { ButtonStyle } from "./Button.style";

export const Button = ({ children, style }) => {
  return <ButtonStyle style={style}>{children}</ButtonStyle>;
};
