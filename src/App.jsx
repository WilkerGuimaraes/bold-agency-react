import { useState } from "react";

import { Banner } from "./components/banner/Banner";
import { Benefits } from "./components/benefits/Benefits";
import { Brands } from "./components/brands/Brands";
import { Contact } from "./components/contact/Contact";
import { Depoiments } from "./components/depoiments/Depoiments";
import { Details } from "./components/details/Details";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { MobileMenu } from "./components/mobile-menu/Mobile-menu";
import { Mockup } from "./components/mockup/Mockup";

export const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <Header toggleMobileMenu={toggleMobileMenu} />
      <Mockup />
      <Brands />
      <Details />
      <Banner />
      <Benefits />
      <Depoiments />
      <Contact />
      <Footer />
      {isVisible && (
        <MobileMenu
          $isVisible={isVisible}
          toggleMobileMenu={toggleMobileMenu}
        />
      )}
    </>
  );
};
