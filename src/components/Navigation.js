import React from "react";
import ImageAsset from "./ImageAsset";

const Navigation = () => {
  return (
    <>
      <div className="flex  h-30">
        <div className="WebsiteLogo border-2 h-full w-3/12 mr-10 ml-10">
          <ImageAsset
            className="w-32 ml-auto lg:ml-0 mr-auto lg:w-64"
            src="websiteLogo"
          />
        </div>
        <div className="mainnavContent w-9/12 border-2">
          <nav>
            <ul className="flex ">
              <li>Home </li>
              <li>News </li>
              <li>Reviews </li>
              <li>Contact us </li>
            </ul>
          </nav>
        </div>
        <div className="rightSideAvatar">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Navigation;
