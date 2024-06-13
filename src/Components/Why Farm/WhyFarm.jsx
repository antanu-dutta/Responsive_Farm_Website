import React from "react";
import "./WhyFarm.css";

function WhyFarm() {
  return (
    <div id="WhyFarm">
      <div className="container">
        <div className="text-center">
          <span className="text-[12px] text-gray-700 font-semibold">
            WHY FARM NATURELLE
          </span>
          <h2 className="text-2xl my-3 font-semibold ">
            We are Organic & Natural
          </h2>
          <div
            id="whyFarm_image"
            className="relative h-[450px] flex items-center py-10 px-3"
          >
            <img
              src="https://farmnaturelle.com/cdn/shop/files/farm_2.png?v=1703231517"
              alt=""
              className="absolute top-0 left-0 z-[-10] w-full h-full object-cover"
            />
            <img
              src="https://farmnaturelle.com/cdn/shop/files/Group_14856958.jpg?v=1703231499"
              alt=""
              className=" absolute top-0 left-0 z-[-10] w-full h-full object-cover"
            />
            <div className="whyFam-content_wrapper flex flex-col gap-8 text-left lg:flex-row">
              <div className="whyFam-content border-r">
                <h3>Pesticides & chemicals free</h3>
                <p>
                  At Farm Naturelle, we believe in purity from seed to harvest.
                  Pesticide-free, chemical-free. Experience nature's true taste,
                  no harmful residues. Your well-being, as pure as our products.
                </p>
              </div>
              <div
                className="whyFam-content border-r
              "
              >
                <h3>Better for your Health & Planet</h3>
                <p>
                  At Farm Naturelle, we prioritize well-being and the planet.
                  All-natural, chemical-free products for a healthier you and a
                  greener Earth.
                </p>
              </div>
              <div className="whyFam-content">
                <h3>Eat Local, Eat Indian</h3>
                <p>
                  Savor India's rich flavors at Farm Naturelle, celebrating "Eat
                  local, eat Indian." We source locally for sustainable,
                  traditional agriculture, promoting community support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyFarm;
