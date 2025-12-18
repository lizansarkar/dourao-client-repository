import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import amazon_vector from "../../assets/brands/amazon_vector.png";
import amazon from "../../assets/brands/amazon.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import start_people from "../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

export default function Brands() {
  const brandLogos = [
    amazon_vector,
    amazon,
    casio,
    moonstar,
    randstad,
    star,
    start_people,
    randstad,
    star,
    start_people,
  ];
  return (
    <div className="container my-5 md:my-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary text-center p-5">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        className="container my-10 md:my-15"
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="h-8 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
