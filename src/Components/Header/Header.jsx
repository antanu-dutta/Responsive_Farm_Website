import React from "react";
import "./Header.css";
import { PiCopySimpleBold } from "react-icons/pi";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IoSearch, IoPersonSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

function Header() {
  // coupon code
  let coupon = "NFARM100";

  return (
    <div>
      <header>
        <div>
          {/* offer section starts here  */}
          <div className="bg-primary center gap-2 text-white py-2">
            <span className="text-[9px] sm:text-base font-semibold">
              Get an extra 5% discount on orders over ₹1000, up to ₹100 - Use
              coupon {coupon}
            </span>
            <span>
              <PiCopySimpleBold className="text-lg sm:text-2xl cursor-pointer" />
            </span>
          </div>
          {/* offer section ends here  */}

          {/* mobile navbar starts here */}
          <div className="px-1 py-2 xl:hidden  border border-red-800">
            <div className="flex justify-between items-center">
              <div id="menu-toggle-bar">
                <FaBars className="text-2xl" />
              </div>
              <div id="mobile-logo">
                <img
                  src="https://farmnaturelle.com/cdn/shop/files/Logo_1_1.png?v=1694410359"
                  alt=""
                  className="w-[60px]"
                />
              </div>
              <div className="flex gap-2 text-xl">
                <div id="mobile-cart-icon">
                  <BsCart2 />
                </div>
                <div id="mobile-user-icon">
                  <FaUser />
                </div>
              </div>
            </div>
            <div id="mobile-search" className="mt-4">
              <div className="border rounded-lg flex items-center px-2 gap-2">
                <IoSearch />
                <input
                  type="text"
                  className="w-full  outline-none px-3 py-1 text-base font-medium"
                  placeholder="Search ..."
                />
              </div>
            </div>
          </div>
          {/* mobile navbar ends here */}

          {/* desktop navbar starts here */}

          <div className="hidden xl:block">
            <div className="px-2 py-1 lg:container">
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <div id="desktop-logo">
                    <img
                      src="https://farmnaturelle.com/cdn/shop/files/Logo_1_1.png?v=1694410359"
                      alt=""
                    />
                  </div>
                  <div id="destop-menubar">
                    <ul className="flex">
                      <li className="text-[13px] font-semibold lg:text-base p-3 py-2 border-r">
                        Shop By Concern
                      </li>
                      <li className="text-[13px] font-semibold lg:text-base p-3 py-2 border-r">
                        Shop By Product
                      </li>
                      <li className="text-[13px] font-semibold lg:text-base p-3 py-2 border-r">
                        Business with us
                      </li>
                      <li className="text-[13px] font-semibold lg:text-base p-3 py-2 border-r">
                        Consult an Acharya (Doctor)
                      </li>
                      <li className="text-[13px] font-semibold lg:text-base p-3 py-2 border-r">
                        Gifting
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  id="desktop-menu-icon"
                  className="flex gap-4 text-lg md:text-xl md:gap-8"
                >
                  <div id="desktop-heart-icon">
                    <CiHeart />
                  </div>
                  <div id="desktop-search-icon">
                    <FaSearch />
                  </div>
                  <div id="desktop-user-icon">
                    <IoPersonSharp />
                  </div>
                  <div id="desktop-cart-icon">
                    <BsCart2 />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* desktop navbar ends here */}
        </div>
      </header>
    </div>
  );
}

export default Header;
