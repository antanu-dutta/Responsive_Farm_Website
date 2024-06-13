import React, { useState } from "react";
import "./CollectionProducts.css";
import Product from "../Product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function CollectionProducts({ product, title, subtitle }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = () => {
    if (swiperInstance !== null) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance !== null) {
      swiperInstance.slideNext();
    }
  };

  return (
    <div>
      <div className="lg:ps-20 py-20">
        <div className="lg:flex">
          <div
            className="text-center lg:w-[25%] lg:me-10 lg:flex lg:flex-col
          lg:items-start lg:justify-center mb-10 lg:mb-0"
          >
            <h2 className="text-brown text-2xl lg:text-4xl font-semibold lg:mb-10">
              {title}
            </h2>
            <span className="text-sm text-left font-medium leading-normal">
              {subtitle}
            </span>
            <div className="hidden lg:block">
              <CustomNavigation onPrev={handlePrev} onNext={handleNext} />
            </div>
            <button className="lg:block hidden border border-brown w-full mt-8 py-3 rounded-lg text-brown font-semibold">
              View All
            </button>
          </div>
          <div className="lg:w-[70%]">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={false}
              loop={true}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {product.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Product item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionProducts;

const CustomNavigation = ({ onPrev, onNext }) => {
  return (
    <div className="custom-navigation">
      <button className="prev-btn" onClick={onPrev}>
        <FaArrowLeft />
      </button>
      <button className="next-btn" onClick={onNext}>
        <FaArrowRight />
      </button>
    </div>
  );
};
