import React from "react";
import ImageAsset from "./ImageAsset";
import { FaStar } from "react-icons/fa";

import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row mt-4">
        <div className="WebsiteLogo  h-full mr-0 ml-0 text-center lg:text-left  lg:mr-10 lg:ml-10">
          <ImageAsset
            className="w-42 h-32 inline lg:block "
            src="websiteLogo"
          />
        </div>
        <div className="flex flex-col w-full  mt-10 lg:mt-20 ml-2 lg:ml-32">
          <div className="mainnavContent   w-full lg:w-6/12 ">
            <nav className="pl-10 pr-10 lg:pl-0 lg:pr-0">
              <ul className="flex justify-between text-sm  cursor-pointer">
                <li>Home </li>
                <li>News </li>
                <li>Reviews </li>
                <li>Contact us </li>
              </ul>
            </nav>
          </div>
          <div className="relative w-[95%] lg:w-8/12 ">
            <input
              className="bg-customGray rounded-full w-full pl-6 mt-4 text-blue-500 px-2 py-2"
              type="text"
              placeholder="search"
            />

            <button className="pointer-events-none cursor-pointer w-8 h-8 absolute top-9 transform -translate-y-1/2 right-4 ">
              <IoCloseOutline className="w-full  h-full" />
            </button>
          </div>
        </div>
        <div className="rightSideAvatar absolute 	hidden lg:block top-0 right-0 ">
          <ImageAsset
            className="w-[24rem]  h-[15rem] object-cover ml-4 mr-auto"
            src="headerRightSideImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
