import { Container, MockupContent, MockupImage } from "./Mockup.style";

import mockupImage from "../../assets/mockup-content.jpg";

export const Mockup = () => {
  return (
    <Container>
      <MockupContent>
        <h1>
          Promova <b>experiências</b> aos seus clientes.
        </h1>
        <p>E veja resultados expressivos dia após dia.</p>
        <MockupImage img src={mockupImage} alt="mockupImage" />
      </MockupContent>
    </Container>
  );
};
