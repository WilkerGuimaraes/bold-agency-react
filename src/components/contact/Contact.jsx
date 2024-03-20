import { Colors } from "../../main.style";
import { Button } from "../button/Button";
import {
  FormContainer,
  FormContent,
  Input,
  Label,
  TextArea,
} from "./Contact.style";

export const Contact = () => {
  const handleFormEvent = (event) => {
    event.preventDefault();
  };

  return (
    <FormContainer>
      <FormContent>
        <h1>Entre em contato</h1>
        <form onClick={handleFormEvent}>
          <Label htmlFor="name">Nome:</Label>
          <Input type="text" name="name" placeholder="Digite seu nome..." />
          <Label htmlFor="email">E-mail:</Label>
          <Input type="email" name="email" placeholder="Digite seu e-mail..." />
          <Label htmlFor="message">Deixe sua mensagem:</Label>
          <TextArea placeholder="..." />
          <Button
            style={{
              width: "100%",
              fontSize: "14px",
              backgroundColor: Colors.background.blue,
              color: Colors.text.white,
            }}
          >
            Enviar
          </Button>
        </form>
      </FormContent>
    </FormContainer>
  );
};
