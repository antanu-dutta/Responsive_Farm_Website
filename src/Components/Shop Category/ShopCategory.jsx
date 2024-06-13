import React from "react";
function ShopCategory({ card, name, logo }) {
  return (
    <div id="product_cateogry" className="bg-secondary py-24 bg-[#f2f7e3]">
      <div className="container">
        <div
          id="name_logo"
          className="flex gap-4 flex-col items-center justify-center mb-10"
        >
          <img src={logo} alt="" className=" h-32 md:h-44 object-cover" />
          <h3 className=" text-lg md:text-4xl text-primary font-semibold">
            {name}
          </h3>
        </div>
        <div
          id="category_product"
          className="flex flex-wrap gap-4 justify-center "
        >
          {card.map((item, index) => (
            <div
              className=" sm:w-[30%] md:w-[25%] lg:w-[13%] w-[45%]  text-center"
              key={index}
            >
              <img
                src={item.path}
                alt=""
                className={`border-2 border-primary mb-4 w-full hover:scale-110 transition-all cursor-pointer ${
                  name.includes("Concern") ? "rounded-full" : "rounded-lg"
                }`}
              />
              <span className="text-base text-primary font-semibold">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
