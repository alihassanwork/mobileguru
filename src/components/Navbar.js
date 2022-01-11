import React from "react";
import ImageAsset from "./ImageAsset";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mt-4">
        <div className="WebsiteLogo  h-full mr-10 ml-10">
          <ImageAsset className="w-42 h-32" src="websiteLogo" />
        </div>
        <div className="flex flex-col w-full  mt-20 ml-32">
          <div className="mainnavContent  w-6/12 ">
            <nav>
              <ul className="flex justify-between text-sm  cursor-pointer">
                <li>Home </li>
                <li>News </li>
                <li>Reviews </li>
                <li>Contact us </li>
              </ul>
            </nav>
          </div>
          <div className="relative w-8/12">
            <input
              className="bg-customGray rounded-full w-full pl-6 mt-4 text-blue-500 px-2 py-2"
              type="text"
              placeholder="search"
            />

            <button className="pointer-events-none w-8 h-8 absolute top-9 transform -translate-y-1/2 right-12">
              Close
            </button>
          </div>
        </div>
        <div className="rightSideAvatar absolute top-0 right-0 ">
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
