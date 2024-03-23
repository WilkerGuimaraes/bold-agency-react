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

  const smoothScroll = (targetId) => {
    const headerId = document.getElementById("header").scrollHeight;
    const mockupId = document.getElementById("mockup").scrollHeight;
    const brandsId = document.getElementById("brands").scrollHeight;
    const detailsId = document.getElementById("details").scrollHeight;
    const benefitsId = document.getElementById("benefits").scrollHeight;
    const bannerId = document.getElementById("banner").scrollHeight;
    const depoimentsId = document.getElementById("depoiments").scrollHeight;

    if (targetId === "details") {
      setTimeout(() => {
        return window.scrollBy({
          top: headerId + mockupId + brandsId,
          behavior: "smooth",
        });
      }, 300);
    }

    if (targetId === "depoiments") {
      setTimeout(() => {
        return window.scrollBy({
          top:
            headerId + mockupId + brandsId + detailsId + benefitsId + bannerId,
          behavior: "smooth",
        });
      }, 300);
    }

    if (targetId === "contact") {
      setTimeout(() => {
        return window.scrollBy({
          top:
            headerId +
            mockupId +
            brandsId +
            detailsId +
            benefitsId +
            bannerId +
            depoimentsId,
          behavior: "smooth",
        });
      }, 300);
    }
  };

  return (
    <>
      <Header
        id="header"
        toggleMobileMenu={toggleMobileMenu}
        smoothScroll={smoothScroll}
      />
      <Mockup id="mockup" />
      <Brands id="brands" />
      <Details id="details" />
      <Banner id="banner" />
      <Benefits id="benefits" />
      <Depoiments id="depoiments" />
      <Contact id="contact" />
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
