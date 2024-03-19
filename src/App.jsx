import { Brands } from "./components/brands/Brands";
import { Header } from "./components/header/Header";
import { Mockup } from "./components/mockup/Mockup";

export const App = () => {
  return (
    <>
      <Header />
      <Mockup />
      <Brands />
    </>
  );
};
