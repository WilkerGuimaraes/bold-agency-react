import { Brands } from "./components/brands/Brands";
import { Details } from "./components/details/Details";
import { Header } from "./components/header/Header";
import { Mockup } from "./components/mockup/Mockup";

export const App = () => {
  return (
    <>
      <Header />
      <Mockup />
      <Brands />
      <Details />
    </>
  );
};
