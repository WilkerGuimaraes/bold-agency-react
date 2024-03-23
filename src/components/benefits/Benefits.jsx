import { IoCheckboxOutline } from "react-icons/io5";

import {
  BenefitsContainer,
  BenefitsContent,
  BenefitsImage,
  BenefitsImageContainer,
  BenefitsWrapper,
} from "./Benefits.style";

import image from "../../assets/IMAGEM1.png";
import { Button } from "../button/Button";
import { Colors } from "../../main.style";

export const Benefits = ({ id }) => {
  return (
    <BenefitsContainer id={id}>
      <BenefitsContent>
        <h1>Benefícios para você</h1>

        <BenefitsWrapper>
          <IoCheckboxOutline
            size={60}
            style={{ color: Colors.icon.checkbox }}
          />
          <p>
            Garantia de resultados, pague de acordo com o desempenho do seu
            projeto ou campanha.
          </p>
        </BenefitsWrapper>

        <BenefitsWrapper>
          <IoCheckboxOutline
            size={60}
            style={{ color: Colors.icon.checkbox }}
          />
          <p>
            Equipe qualificada. Nossos profissionais possuem vasta experiência
            nacional e no exterior.
          </p>
        </BenefitsWrapper>

        <BenefitsWrapper>
          <IoCheckboxOutline
            size={77}
            style={{ color: Colors.icon.checkbox }}
          />
          <p>
            Acreditamos que trabalhos criativos são os que mais se destacam em
            meio a multidão. Saia do feijão com arroz.
          </p>
        </BenefitsWrapper>

        <Button
          style={{
            color: Colors.text.white,
            backgroundColor: Colors.background.blue,
            width: "180px",
          }}
        >
          ENTRAR EM CONTATO
        </Button>
      </BenefitsContent>

      <BenefitsImageContainer>
        <BenefitsImage src={image} alt="benefits-image" />
      </BenefitsImageContainer>
    </BenefitsContainer>
  );
};
