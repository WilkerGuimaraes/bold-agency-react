import {
  DetailsCard,
  DetailsContainer,
  DetailsContent,
  DetailsTitle,
} from "./Details.style";

import icon1 from "../../assets/ICONE1.png";
import icon2 from "../../assets/ICONE2.png";
import icon3 from "../../assets/ICONE3.png";

export const Details = () => {
  return (
    <DetailsContainer>
      <DetailsTitle>
        <h1>Por que nós?</h1>
        <p>
          Uma experiência incrível para seus clientes, resultados espetaculares
          para sua empresa.
        </p>
      </DetailsTitle>

      <DetailsContent>
        <DetailsCard>
          <img src={icon1} alt="icon1" />
          <h3>Planejamento impecável</h3>
          <p>
            Conte com a Agência Bold como sua parceira no planejamento de seus
            projetos, conteúdos, campanhas, estratégias. Nossos profissionais
            altamente qualificados estão preparados para qualquer desafio.
          </p>
        </DetailsCard>

        <DetailsCard>
          <img src={icon2} alt="icon2" />
          <h3>Pague pelos resultados</h3>
          <p>
            Aqui você paga de acordo com o retorno que ganha em cada campanha.
            Não deixe a oportunidade de ter melhores resultados para amanhã.
            Entre em contato e vamos conversar sobre sua necessidade.
          </p>
        </DetailsCard>

        <DetailsCard>
          <img src={icon3} alt="icon3" />
          <h3>Suporte e acompanhamento</h3>
          <p>
            Mesmo após terminarmos nosso projeto ou estratégia, nós da Agência
            Bold acompanharemos os futuros desdobramentos e resultados
            oferecendo todo suporte possível para você e sua equipe.
          </p>
        </DetailsCard>
      </DetailsContent>
    </DetailsContainer>
  );
};
