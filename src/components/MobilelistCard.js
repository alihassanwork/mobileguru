import React from "react";
import { ImageAsset } from "components";
import { FaStar ,GrFormClose } from "react-icons/fa";

const MobilelistCard = (props) => {
  const { imgsrc, mobilename, price, rating } = props;
  const stars = Array(5).fill(0);
  return (
    <React.Fragment>
      <div className="bg-white flex-col w-full  rounded-md pb-5">
        <div className="flex justify-center">
          <ImageAsset className=" object-top p-2  h-[14rem]" src={imgsrc} />
        </div>
        <div className="flex-col w-full pl-6">
          <h3>{mobilename}</h3>
          <h3 className="text-[#F4871E] font-bold text-2xl mt-2">{price}</h3>
          <p className="text-xs mt-2 font-light">
            Eligible for Shipping To Mars or somewhere else
          </p>
          <div className="flex w-full items-center">
            <div className="flex  text-[#F4871E] text-xs">
              {stars.map((_, index) => {
                return <FaStar key={index} />;
              })}
            </div>
            <h3 className="text-xs ml-3 ">{rating}</h3>{" "}
            <button className="flex ml-3 items-center rounded-[0.3rem] p-1  text-xs border border-[#9DC2FF] text-[#9DC2FF] ">
              <ImageAsset
                className="w-[1rem] h-[1rem] mr-1  "
                src="HeartIcon"
              />
              Watch
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobilelistCard;
