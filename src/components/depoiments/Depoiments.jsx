import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";

import {
  CardImage,
  CarouselContainer,
  DepoimentsContainer,
  CardImg,
  TitleContainer,
  Card,
  ImageContent,
  CardContent,
  SocialsContainer,
  CardContentDescription,
} from "./Depoiments.style";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";
import profile4 from "../../assets/profile4.jpg";
import profile5 from "../../assets/profile5.jpg";
import profile6 from "../../assets/profile6.jpg";
import profile7 from "../../assets/profile7.jpg";
import profile8 from "../../assets/profile8.jpg";
import profile9 from "../../assets/profile9.jpg";

export const Depoiments = ({ id }) => {
  const data = [
    {
      id: crypto.randomUUID(),
      image: profile1,
      title: "Maria Oliveira",
      description:
        "Estou extremamente satisfeita com o trabalho da Agência Bold. Eles foram muito profissionais, prestativos e entregaram um site de alta qualidade dentro do prazo estipulado. Com certeza farei mais projetos com eles no futuro!",
    },
    {
      id: crypto.randomUUID(),
      image: profile2,
      title: "Carla Rodrigues",
      description:
        "O trabalho da Agência Bold foi fundamental para o sucesso do meu negócio. Eles desenvolveram um site incrível, moderno e totalmente responsivo. Além disso, o atendimento foi excepcional. Estou muito satisfeita com o resultado!",
    },
    {
      id: crypto.randomUUID(),
      image: profile3,
      title: "João Silva",
      description:
        "A equipe da Agência Bold superou minhas expectativas! Eles desenvolveram um aplicativo incrível para minha empresa, tornando todo o processo muito fácil e eficiente. Recomendo fortemente seus serviços!",
    },
    {
      id: crypto.randomUUID(),
      image: profile4,
      title: "Pedro Santos",
      description:
        "Contratei a Agência Bold para desenvolver um sistema de gestão para minha empresa e fiquei impressionado com o resultado. O sistema ficou excelente e facilitou muito o nosso dia a dia. Recomendo a todos!",
    },
    {
      id: crypto.randomUUID(),
      image: profile5,
      title: "Rafael Costa",
      description:
        "Excelente serviço prestado pela Agência Bold! Eles entenderam perfeitamente minhas necessidades e entregaram um aplicativo que superou todas as minhas expectativas. Profissionalismo e qualidade do início ao fim!",
    },
    {
      id: crypto.randomUUID(),
      image: profile6,
      title: "Amanda Souza",
      description:
        "Estou muito feliz com o resultado do projeto desenvolvido pela Agência Bold. Eles foram extremamente atenciosos, entenderam minhas ideias e transformaram em realidade. Recomendo a todos que buscam qualidade e profissionalismo!",
    },
    {
      id: crypto.randomUUID(),
      image: profile7,
      title: "Fernando Oliveira",
      description:
        "A equipe da Agência Bold é incrível! Eles foram muito dedicados e comprometidos em atender todas as minhas necessidades. O site que eles desenvolveram para minha empresa ficou perfeito. Super recomendo!",
    },
    {
      id: crypto.randomUUID(),
      image: profile8,
      title: "Laura Santos",
      description:
        "Contratei a Agência Bold para desenvolver um aplicativo para minha startup e não poderia estar mais satisfeita com o resultado. Eles foram muito profissionais, criativos e entregaram o projeto dentro do prazo. Recomendo a todos!",
    },
    {
      id: crypto.randomUUID(),
      image: profile9,
      title: "Marcos Oliveira",
      description:
        "Fiquei impressionado com a qualidade do serviço prestado pela Agência Bold. Eles desenvolveram um sistema personalizado para minha empresa, atendendo a todas as nossas demandas e superando nossas expectativas. Sem dúvida, uma equipe altamente competente e profissional!",
    },
  ];

  return (
    <DepoimentsContainer id={id}>
      <TitleContainer>
        <h1>Depoimentos</h1>
      </TitleContainer>

      <CarouselContainer>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 5000 }}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          style={{ padding: "45px" }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            650: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((d) => (
            <SwiperSlide key={d.id}>
              <Card>
                <ImageContent>
                  <span></span>
                  <CardImage>
                    <CardImg src={d.image} />
                  </CardImage>
                </ImageContent>

                <CardContent>
                  <CardContentDescription>
                    <h3>{d.title}</h3>
                    <p>{d.description}</p>
                  </CardContentDescription>

                  <SocialsContainer>
                    <IoLogoInstagram />
                    <IoLogoFacebook />
                    <IoLogoLinkedin />
                    <IoLogoYoutube />
                  </SocialsContainer>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </CarouselContainer>
    </DepoimentsContainer>
  );
};
