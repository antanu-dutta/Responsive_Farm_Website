import React from "react";
import "./Banner2.css";

function Banner2() {
  return (
    <div>
      {/* mobile banner 2 starts here */}

      <div id="mobile-banner2" className="md:hidden">
        <div className="relative h-[550px] py-10 px-2">
          <img
            src="https://farmnaturelle.com/cdn/shop/files/Component_143_1.jpg?v=1716216088"
            alt=""
            className="absolute top-0 left-0 w-full h-full z-[-1] object-cover"
          />
          <div className="text-center text-white">
            <span className="text-[13px] uppercase font-semibold">
              healthy living starts with healthy eating
            </span>
            <h2 className="text-3xl mt-4 capitalize font-bold leading-snug">
              from farm to your table
            </h2>
            <div className="center mt-4 gap-4 ">
              <img
                src="https://farmnaturelle.com/cdn/shop/files/Group_14856903.svg?v=1698905393"
                alt="review-stars"
              />
              <span>over 50 lacs+ product sold</span>
            </div>
            <button className="rounded-lg py-3 px-4 border border-white mt-4 uppercase font-semibold hover:bg-primary hover:text-white">
              explore our products
            </button>
          </div>
        </div>
      </div>

      {/* mobile banner 2 starts here */}

      {/* desktop banner 2 starts here */}

      <div id="desktop-banner2" className="hidden md:block">
        <div className="relative h-screen py-10 lg:py-20 px-20">
          <img
            src="https://farmnaturelle.com/cdn/shop/files/FN_22.jpg?v=1703157867"
            alt=""
            className="absolute top-0 left-0 h-full w-full object-cover z-[-1]"
          />
          <div className=" text-center text-white">
            <span className="text-base uppercase font-semibold">
              the most trusted ayurvedic and organism brand
            </span>
            <h2 className="text-6xl mt-4 capitalize font-bold leading-snug">
              say not to health issue <br /> and yes to life
            </h2>
            <div className="center mt-4 gap-4 ">
              <img
                src="https://farmnaturelle.com/cdn/shop/files/Group_14856903.svg?v=1698905393"
                alt="review-stars"
              />
              <span>over 50 lacs+ product sold</span>
            </div>
            <button className="rounded-lg py-3 px-4 border border-white mt-4 uppercase font-semibold hover:bg-primary hover:text-white transition-all">
              explore our products
            </button>
          </div>
        </div>
      </div>

      {/* desktop banner 2 ends here */}
    </div>
  );
}

export default Banner2;
