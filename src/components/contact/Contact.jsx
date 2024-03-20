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
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome..."
            autoComplete="name"
          />
          <Label htmlFor="email">E-mail:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail..."
            autoComplete="email"
          />
          <Label htmlFor="message">Deixe sua mensagem:</Label>
          <TextArea id="message" placeholder="..." autoComplete="off" />
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
