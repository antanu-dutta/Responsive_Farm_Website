import React from "react";

function Banner4() {
  const content = [
    {
      path: "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Vector_10.svg?v=1698902843",
      text: "ayurvedic products",
    },
    {
      path: "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_16.svg?v=1698902843",
      text: "lifestyle recommendation",
    },
    {
      path: "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_17.svg?v=1698902842",
      text: "custom diet plan",
    },
    {
      path: "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_18.svg?v=1698902843",
      text: "expoert connect",
    },
  ];

  return (
    <div className="w-full h-screen flex items-center relative">
      <img
        src="https://farmnaturelle.com/cdn/shop/files/FN44_1.jpg?v=1713348888"
        alt="banner1"
        className="absolute -z-50 top-0 left-0 w-full h-full object-cover"
      />
      <div className="w-1/2 ps-20">
        <span className="text-white font-semibold block mb-4 uppercase text-base">
          the most truested ayurvedic
        </span>
        <h2 className="text-7xl capitalize text-white mb-4 font-semibold">
          <span className="text-[#cbd82d]">don't delay</span> your health
          concerns!
        </h2>
        <span className="text-white text-base lowercase font-medium mb-4 block">
          consult with our acharayas (doctors) and get
        </span>
        <div className="grid grid-cols-2 mb-4 flex-wrap gap-4">
          {content.map((item, index) => (
            <div
              className="bg-white flex items-center p-4 gap-5 rounded-lg"
              key={index}
            >
              <img src={item.path} alt={item.text} />
              <span className="capitalize font-semibold text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        <button className="block w-full uppercase py-4 bg-transparent border-2 text-white border-white rounded-xl hover:bg-white hover:text-primary transition-all hover:border-primary font-semibold">
          book consultaion @ rs 99
        </button>
      </div>
    </div>
  );
}

export default Banner4;
