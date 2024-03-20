import { Banner } from "./components/banner/Banner";
import { Benefits } from "./components/benefits/Benefits";
import { Brands } from "./components/brands/Brands";
import { Contact } from "./components/contact/Contact";
import { Depoiments } from "./components/depoiments/Depoiments";
import { Details } from "./components/details/Details";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Mockup } from "./components/mockup/Mockup";

export const App = () => {
  return (
    <>
      <Header />
      <Mockup />
      <Brands />
      <Details />
      <Banner />
      <Benefits />
      <Depoiments />
      <Contact />
      <Footer />
    </>
  );
};
