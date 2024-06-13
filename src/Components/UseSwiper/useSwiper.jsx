import { useEffect, useRef } from "react";
import Swiper from "swiper";

const useSwiper = (swiperOptions) => {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    if (swiperContainerRef.current) {
      const swiperInstance = new Swiper(
        swiperContainerRef.current,
        swiperOptions
      );

      return () => {
        if (swiperInstance && swiperInstance.destroy) {
          swiperInstance.destroy(true, true);
        }
      };
    }
  }, [swiperOptions]);

  return swiperContainerRef;
};

export default useSwiper;
