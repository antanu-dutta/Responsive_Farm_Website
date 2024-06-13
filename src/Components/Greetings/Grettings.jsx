import React from "react";
import "./Greetings.css";

function Grettings() {
  return (
    <div className="greetings bg-primary py-7">
      <div className="container">
        <div className="greeting-container md:flex gap-5">
          <div className="greeting-content-wrapper md:flex-1">
            <span className="text-[#bac34e] uppercase text-sm font-medium block mb-3">
              welcome to farm naturelle
            </span>
            <h1 className="text-2xl text-white mb-7 font-medium">
              Here Nature's Purest Treasures are natured and harvested for you
              well-being
            </h1>
            <img
              src="https://farmnaturelle.com/cdn/shop/files/ABOUT_2_280x.jpg?v=1703232158"
              alt=""
              className="w-full hidden md:block"
            />
          </div>
          <div className="greeting-image_content-wrapper md:flex-1">
            <div className="greeting-image-wrapper">
              <img
                src="https://farmnaturelle.com/cdn/shop/files/Rectangle_9245_280x.jpg?v=1703160482"
                alt=""
                className="w-full"
              />
            </div>
            <div className="greeting-imageContent-Wrapper">
              <p className="text-sm font-normal text-white my-2">
                At Farm Naturelle, we believe that the path to true wellness
                begins with embracing the gifts of nature. Through our organic
                farming methods and sustainable approach, we deliver a diverse
                range of products that are not only good for you but also good
                for the planet. Join us as we cultivate a healthier future, one
                harvest at a time, and savor the authentic flavors of Farm
                Naturelle that nourish both body and soul.
              </p>
              <button className="block w-full text-center mb-2 border rounded-xl py-3 font-medium px-8 text-white">
                KNOW MORE
              </button>
              <button className="block w-full text-center bg-white rounded-xl py-3 font-medium px-8">
                BOOK A FARM VISIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grettings;
