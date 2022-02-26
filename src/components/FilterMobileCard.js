import React from "react";
import { ImageAsset } from "components";

const FilterMobileCard = (props) => {
  const { title, products } = props;
  return (
    <div className="w-full">
      <div className="card rounded-tl-[3rem]  mt-5 pb-4  rounded-b-[3rem]  bg-backgroundGreenColor w-full">
        <div className="cardRow w-full text-lg text-center pt-5 pb-2 text-white">
          <h1>{title}</h1>
        </div>
        <div className="w-full border-b border-white mr-2"></div>
        <div>
          <div className=" flex flex-parent gap-x-[1rem] justify-center pl-2 pr-1 mt-5">
            {products.slice(0, 3).map(({ name, src }) => {
              return (
                <div className="flex-item cursor-pointer">
                  <div className="flex flex-col w-full text-xs text-white">
                    <ImageAsset
                      className="w-full h-[5rem] md:h-[4rem] "
                      src={src}
                    />
                    <h3>{name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" flex flex-parent gap-x-[1rem] justify-center pl-2 pr-1 mt-5 ">
            {products.slice(3, 6).map(({ name, src }) => {
              return (
                <div className="flex-item ">
                  <div className="flex flex-col w-full text-xs text-white">
                    <ImageAsset
                      className="w-full h-[5rem] md:h-[4rem] "
                      src={src}
                    />
                    <h3>{name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full text-center mt-4 text-lg text-white ">
            <button className="bg-buttonBgColor bg-gradient-to-b text-sm p-2 pl-4 pr-4 rounded-md from-buttonBgColorGradian1 to-buttonBgcolorGradian2  shadow-cyan-500/50 shadow-inner">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMobileCard;
