import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-black ">
      <div className="container">
        <div className="flex justify-between h-12 items-center text-white">
          <div></div>
          <div>
            <a href="#" className="text-sm">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!{" "}
              <strong className=" inline-block font-medium underline">
                ShopNow
              </strong>
            </a>
          </div>
          <div>
            <button className="text-sm">
              English <IoIosArrowDown className="inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
