import React from "react";

function UpperFooter() {
  return (
    <div>
      <div className="upper-footer">
        <div className="container">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-3xl lg:text-5xl text-center text-primary font-semibold">
              Also Available On
            </h1>
            <div className="upper-footer-available-company flex items-center gap-4">
              <img
                src="https://farmnaturelle.com/cdn/shop/files/Link_Amazon_png_480x.png?v=1696490249"
                alt="amazon-logo"
                className="upper-footer-logo"
              />
              <img
                src="https://farmnaturelle.com/cdn/shop/files/FLIPKART_1_480x.png?v=1704798125"
                alt="flipkart-logo"
                className="upper-footer-logo"
              />
              <img
                src="https://farmnaturelle.com/cdn/shop/files/image_12383_480x.png?v=1696490466"
                alt="jio-logo"
                className="upper-footer-logo"
              />
              <img
                src="https://farmnaturelle.com/cdn/shop/files/Link_meesho_png_480x.png?v=1696490466"
                alt="meesho-logo"
                className="upper-footer-logo"
              />
              <img
                src="https://farmnaturelle.com/cdn/shop/files/NicePng_alibaba-logo-png_2803824_1_480x.png?v=1696490466"
                alt="big-basket-logo"
                className="upper-footer-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperFooter;
