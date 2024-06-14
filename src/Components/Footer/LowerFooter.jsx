import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function LowerFooter() {
  return (
    <div>
      <div className="lower-footer bg-primary ">
        <div className="container">
          <div className="lower-footer-content py-10">
            <div className="lg:flex justify-center items-start gap-20">
              <div className="lg:flex-1">
                <img
                  src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Link_cropped-cropped-FN_logo_2021-1-e1662637473598_png.png?v=1696492045"
                  alt="footer-logo"
                  className="object-cover mb-4"
                />
                <p className="text-white font-medium text-[13px] mb-4">
                  Become a Insider and get 10% off your order today. Plus we'll
                  keep you upto-date with the latest theme news.
                </p>
                <div className="lower-footer-input-section flex items-center bg-white justify-between rounded-lg overflow-hidden mb-4">
                  <input
                    type="text"
                    className="p-2 w-3/4 border-none outline-none text-gray-700 text-sm"
                    placeholder="Enter your Email address"
                  />
                  <div className="w-[30%]  flex justify-center">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="lg:flex-1 flex lg:gap-10 mb-4">
                <div className="flex-1">
                  <span className="uppercase text-white font-medium">
                    categories
                  </span>
                  <ul className="lower-footer-links flex flex-col gap-2  mt-3">
                    <li>Honey Cooking Oil</li>
                    <li>Cooking Oil</li>
                    <li>A2 Ghee</li>
                    <li>Apple Cidar Venegar</li>
                    <li>Herbal Juice</li>
                    <li>Hill Turmeric</li>
                    <li>Amla Candy</li>
                    <li>Welness Oils</li>
                    <li>Stevia</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <span className="uppercase text-white font-medium">
                    important links
                  </span>
                  <ul className="lower-footer-links flex flex-col gap-2  mt-3">
                    <li>About Us</li>
                    <li>Our Farms</li>
                    <li>Contact Us</li>
                    <li>Bulk Purchase</li>
                    <li>Blogs</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Condition</li>
                    <li>Shipping Policy</li>
                    <li>Refund Policy</li>
                  </ul>
                </div>
              </div>
              <div className="lg:flex-1 lower-footer-contact text-white">
                <span className="text-lg font-semibold uppercase block mb-4">
                  contact info
                </span>
                <p className="mb-4">
                  PHONE: <br />
                  98109 88725,81305 31333
                </p>
                <p>
                  EMAIL: <br />
                  hello@farmnaturlle.com
                </p>
                <div className="lower-footer-social-icon-container flex gap-4 mt-5 text-2xl px-6">
                  <FaFacebook />
                  <FaWhatsapp />
                  <FaInstagram />
                  <FaYoutube />
                </div>
              </div>
            </div>
            <div className="lower-footer-copyright p-6 flex items-center flex-col gap-4">
              <p className="text-sm text-white">
                @ 2024 Farm Naturelle. All right resereved
              </p>
              <div className="lower-footer-accepted-card"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LowerFooter;
