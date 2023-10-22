"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const list: Array<MainSlide> = [
  {
    img: "/images/slide1.png",
  },
  {
    img: "/images/slide2.jpg",
  },
  {
    img: "/images/slide3.png",
  },
  {
    img: "/images/slide4.png",
  },
  {
    img: "/images/slide5.jpg",
  },
];

interface MainSlide {
  img: string;
}

function MainSwiper() {
  return (
    <Swiper
      className="mb-10"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {list.map((el, i: number) => {
        return (
          <SwiperSlide key={i}>
            <Image
              src={el.img}
              alt="slide"
              width={300}
              height={300}
              layout="responsive"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default MainSwiper;
