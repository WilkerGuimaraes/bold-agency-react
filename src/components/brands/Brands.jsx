import { BrandsContainer, BrandImage } from "./Brands.style";

import brand1 from "../../assets/LOGO1.png";
import brand2 from "../../assets/LOGO2.png";
import brand3 from "../../assets/LOGO3.png";
import brand4 from "../../assets/LOGO4.png";
import brand5 from "../../assets/LOGO5.png";

export const Brands = () => {
  return (
    <>
      <BrandsContainer>
        <BrandImage src={brand1} alt="logo1" />
        <BrandImage src={brand2} alt="logo2" />
        <BrandImage src={brand3} alt="logo3" />
        <BrandImage src={brand4} alt="logo4" />
        <BrandImage src={brand5} alt="logo5" />
      </BrandsContainer>
    </>
  );
};
