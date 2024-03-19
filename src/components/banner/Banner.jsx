import { BannerContainer, BannerContent } from "./Banner.style";
import { Colors } from "../../main.style";

import { Button } from "../button/Button";

export const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <h1>Vamos começar seu projeto?</h1>
        <p>Fale com um consultor e tire sua idéia do papel.</p>
        <Button
          style={{
            color: Colors.text.blue,
            backgroundColor: Colors.background.yellow,
          }}
        >
          ENTRAR EM CONTATO
        </Button>
      </BannerContent>
    </BannerContainer>
  );
};
