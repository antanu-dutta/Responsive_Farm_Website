import React from "react";
import "./GiftSection.css";

function GiftSection() {
  return (
    <div className="gift-section">
      <div className="container">
        <h2 className="text-center text-black text-2xl font-semibold mb-5">
          Gift Youur Loved ones Healthy Living{" "}
          <span className="text-primary">starts @ Rs 499 only</span>
        </h2>
        <div className="">
          <GiftBox />
          {/* <GiftBox /> */}
        </div>
      </div>
    </div>
  );
}

const GiftBox = () => {
  return (
    <div className="gift-box p-3 h-[200px] md:h-[400px] relative">
      <img
        src="https://farmnaturelle.com/cdn/shop/files/Frame_14857656.png?v=1698911233"
        alt=""
        className="absolute top-0 left-0 w-full h-full  z-[-10] brightness-50"
      />
      <img
        src="https://farmnaturelle.com/cdn/shop/files/Frame_14857384.png?v=1696467233"
        alt=""
        className="md:block hidden absolute top-0 left-0 w-full h-full  z-[-10] brightness-50"
      />
      <div className="gift-box-content">
        <h2 className="text-white text-xl font-semibold mb-3">
          Chololate Tulip Box
        </h2>
        <span className="text-[12px] text-white block mb-3">
          2 Bottle of Honey (400g each) with Dipper
        </span>
        <span className="text-sm text-[#a57912] font-medium">
          Starting from rs. 949 only-
        </span>
      </div>
    </div>
  );
};

export default GiftSection;
