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

export const Depoiments = () => {
  const data = [
    {
      id: crypto.randomUUID(),
      image: profile1,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa porta, vehicula elit vel, finibus nisi. Nam quis faucibus lorem. Cras tincidunt tincidunt pellentesque. Etiam tempus ipsum eget velit feugiat, eget scelerisque erat tempus. Mauris posuere lobortis sapien, in ornare mauris venenatis id. Etiam mollis velit ac euismod semper.",
    },
    {
      id: crypto.randomUUID(),
      image: profile2,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa porta, vehicula elit vel, finibus nisi. Nam quis faucibus lorem. Cras tincidunt tincidunt pellentesque. Etiam tempus ipsum eget velit feugiat, eget scelerisque erat tempus. Mauris posuere lobortis sapien, in ornare mauris venenatis id. Etiam mollis velit ac euismod semper.",
    },
    {
      id: crypto.randomUUID(),
      image: profile3,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa porta, vehicula elit vel, finibus nisi. Nam quis faucibus lorem. Cras tincidunt tincidunt pellentesque. Etiam tempus ipsum eget velit feugiat, eget scelerisque erat tempus. Mauris posuere lobortis sapien, in ornare mauris venenatis id. Etiam mollis velit ac euismod semper.",
    },
    {
      id: crypto.randomUUID(),
      image: profile4,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa porta, vehicula elit vel, finibus nisi. Nam quis faucibus lorem. Cras tincidunt tincidunt pellentesque. Etiam tempus ipsum eget velit feugiat, eget scelerisque erat tempus. Mauris posuere lobortis sapien, in ornare mauris venenatis id. Etiam mollis velit ac euismod semper.",
    },
    {
      id: crypto.randomUUID(),
      image: profile5,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa porta, vehicula elit vel, finibus nisi. Nam quis faucibus lorem. Cras tincidunt tincidunt pellentesque. Etiam tempus ipsum eget velit feugiat, eget scelerisque erat tempus. Mauris posuere lobortis sapien, in ornare mauris venenatis id. Etiam mollis velit ac euismod semper.",
    },
    {
      id: crypto.randomUUID(),
      image: profile6,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa porta, vehicula elit vel, finibus nisi. Nam quis faucibus lorem. Cras tincidunt tincidunt pellentesque. Etiam tempus ipsum eget velit feugiat, eget scelerisque erat tempus. Mauris posuere lobortis sapien, in ornare mauris venenatis id. Etiam mollis velit ac euismod semper.",
    },
    {
      id: crypto.randomUUID(),
      image: profile7,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa porta, vehicula elit vel, finibus nisi. Nam quis faucibus lorem. Cras tincidunt tincidunt pellentesque. Etiam tempus ipsum eget velit feugiat, eget scelerisque erat tempus. Mauris posuere lobortis sapien, in ornare mauris venenatis id. Etiam mollis velit ac euismod semper.",
    },
    {
      id: crypto.randomUUID(),
      image: profile8,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa porta, vehicula elit vel, finibus nisi. Nam quis faucibus lorem. Cras tincidunt tincidunt pellentesque. Etiam tempus ipsum eget velit feugiat, eget scelerisque erat tempus. Mauris posuere lobortis sapien, in ornare mauris venenatis id. Etiam mollis velit ac euismod semper.",
    },
    {
      id: crypto.randomUUID(),
      image: profile9,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa porta, vehicula elit vel, finibus nisi. Nam quis faucibus lorem. Cras tincidunt tincidunt pellentesque. Etiam tempus ipsum eget velit feugiat, eget scelerisque erat tempus. Mauris posuere lobortis sapien, in ornare mauris venenatis id. Etiam mollis velit ac euismod semper.",
    },
  ];

  return (
    <DepoimentsContainer>
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
                  <h3>{d.title}</h3>
                  <p>{d.description}</p>

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
