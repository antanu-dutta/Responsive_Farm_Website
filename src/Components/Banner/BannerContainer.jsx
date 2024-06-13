import React from "react";
import Banner1 from "./Banner1/Banner1";
import Banner2 from "./Banner2/Banner2";
import Banner3 from "./Banner3/Banner3";
import Banner4 from "./Banner4/Banner4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function BannerContainer() {
  return (
    <>
      {/* mobile banner slider starts here */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <Banner1 />
          </SwiperSlide>
          <SwiperSlide>
            <Banner2 />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* mobile banner slider ends here */}

      {/* desktop banner slider starts here */}

      <div className="hidden md:block">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <Banner1 />
          </SwiperSlide>
          <SwiperSlide>
            <Banner2 />
          </SwiperSlide>
          <SwiperSlide>
            <Banner3 />
          </SwiperSlide>
          <SwiperSlide>
            <Banner4 />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* desktop banner slider ends here */}
    </>
  );
}

export default BannerContainer;
