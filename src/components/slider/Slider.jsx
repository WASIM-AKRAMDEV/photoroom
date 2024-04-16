import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "react-bootstrap/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../slider/slider.css";
// import required modules
import { Navigation } from "swiper/modules";

export const Slider = ({ sliderItems, swiperName }) => {
  const prevButtonClass = `${swiperName}-prev-button`;
  const nextButtonClass = `${swiperName}-next-button`;

  return (
    <div className="swiper-main position-relative mt-3">
      <Swiper

        spaceBetween={15}
        navigation={{
          prevEl: `.${prevButtonClass}`,
          nextEl: `.${nextButtonClass}`,
        }}
        modules={[Navigation]}
        className={swiperName}
        breakpoints={{
          640: {
            slidesPerView: 2,
      
          },
          768: {
            slidesPerView: 3,
          
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
           1440: {
            slidesPerView: 7,
          },
        }}
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <Button className={`image-btn ${item.card}`} size="lg">
              {item.id && (
                <span className="pro-text-main">
                  <span className="pro-text">Pro</span>
                </span>
              )}

              <img src={item.image} alt="" className={item.class} />
            </Button>
            <p>{item.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="buttons-cont d-flex position-absolute  end-0 gap-2">
        <div className={`${prevButtonClass} swiper-button-prev`}>
          <FaArrowLeft className="arrow" />
        </div>
        <div className={`${nextButtonClass} swiper-button-next`}>
          <FaArrowRight className="arrow" />
        </div>
      </div>
    </div>
  );
};
