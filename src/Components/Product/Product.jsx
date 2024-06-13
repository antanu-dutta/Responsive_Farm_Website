import React from "react";
import { CiHeart } from "react-icons/ci";
import "./Product.css";

function Product({ item }) {
  const { path, hoverPath, title, new_price, old_price, offer } = item;
  const handleItem = () => {
    console.log(item);
  };
  return (
    <div>
      <div className=" p-3 overflow-hidden">
        <div className="relative p-3 h-[350px] lg:h-[400px] flex items-start justify-between group">
          <img
            src={path}
            alt=""
            className="absolute top-0 left-0 h-full w-full object-cover z-[-10]"
          />
          <img
            src={hoverPath}
            alt=""
            className="absolute top-0 right-[-100rem] h-full w-full object-cover z-[-10] group-hover:right-0 transition-all duration-300"
          />
          <span className="bg-orange text-white py-1 px-2 text-sm rounded-2xl ">
            Bestseller
          </span>
          <div>
            <CiHeart className="text-3xl" />
          </div>
        </div>
        <div className="mt-4 ">
          <span className="text-base font-semibold text-black">{title}</span>
          <hr className="my-2" />
          <div className="flex items-center  mb-4">
            <span className="line-through text-[12px] text-gray-500 me-2">
              Rs. {old_price}
            </span>
            <span className="text-black text-sm font-normal me-6">
              Rs. {new_price}
            </span>
            <span className="bg-red-700 text-white font-semibold p-1 text-sm rounded-lg">
              {offer}
            </span>
          </div>
          <button
            className=" w-full py-3 rounded-lg text-primary font-bold border border-primary"
            onClick={handleItem}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
