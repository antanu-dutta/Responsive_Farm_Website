import React from "react";
import "./Banner1.css";

function Banner1() {
  return (
    <div>
      {/* mobile banner 1 starts here  */}

      <div id="mobile-banner1" className="md:hidden">
        <div className="relative h-[550px] py-10 px-2">
          <img
            src="https://farmnaturelle.com/cdn/shop/files/Frame_14857629.webp?v=1716216009"
            alt=""
            className="absolute top-0 left-0 w-full h-full z-[-1] object-cover"
          />
          <div className="text-center text-black">
            <span className="text-[13px] uppercase font-semibold">
              the most trusted ayurvedic and organism brand
            </span>
            <h2 className="text-3xl mt-4 capitalize font-bold leading-snug">
              say not to health issue and yes to life
            </h2>
            <div className="center mt-4 gap-4 ">
              <img
                src="https://farmnaturelle.com/cdn/shop/files/Group_14856903.svg?v=1698905393"
                alt="review-stars"
              />
              <span>over 50 lacs+ product sold</span>
            </div>
          </div>
        </div>
      </div>

      {/* mobile banner 1 ends here  */}

      {/* desktop banner 1 starts here */}

      <div id="desktop-banner1" className="hidden md:block">
        <div className="relative h-screen py-10 lg:py-20 px-20">
          <img
            src="https://farmnaturelle.com/cdn/shop/files/Component_166_1_1_1.jpg?v=1713349229"
            alt=""
            className="absolute top-0 left-0 h-full w-full object-cover z-[-1]"
          />
          <div className=" text-black">
            <span className="text-base uppercase font-semibold">
              the most trusted ayurvedic and organism brand
            </span>
            <h2 className="text-6xl mt-4 capitalize font-bold leading-snug">
              say not to health issue <br /> and yes to life
            </h2>
            <div className="flex mt-4 gap-4 ">
              <img
                src="https://farmnaturelle.com/cdn/shop/files/Group_14856903.svg?v=1698905393"
                alt="review-stars"
              />
              <span>over 50 lacs+ product sold</span>
            </div>
          </div>
        </div>
      </div>

      {/* desktop banner 1 ends here */}
    </div>
  );
}

export default Banner1;
