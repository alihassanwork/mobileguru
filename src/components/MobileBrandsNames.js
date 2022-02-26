import React from "react";

const MobileBrandsNames = () => {
  return (
    <>
      <div className="card rounded-tl-[4rem] mt-6 lg:mt-0  rounded-b-[4rem] bg-backgroundGreenColor w-full">
        <div className="cardRow w-full text-center pt-5 pb-5 text-white">
          <h1>Mobile Brands Names</h1>
        </div>
        <div className="w-full border-b border-white mr-2  "></div>
        <div className="flex text-xs lg:text-sm pl-3 pr-3">
          <div className="w-[33%] space-y-5 mt-2 lg:mt-5  pb-[2.5rem]  lg:pb-[8rem] text-white">
            <h2 className="cursor-pointer">Apple </h2>
            <h2 className="cursor-pointer">Samsung</h2>
            <h2 className="cursor-pointer">Infinix</h2>
            <h2 className="cursor-pointer">Realme </h2>
          </div>
          <div className="border-l  border-white mr-2 "></div>
          <div className="w-[33%] space-y-5 text-white mt-2 lg:mt-5">
            <h2 className="cursor-pointer">Apple </h2>
            <h2 className="cursor-pointer">Samsung</h2>
            <h2 className="cursor-pointer">Infinix</h2>
            <h2 className="cursor-pointer">Realme </h2>
          </div>
          <div className="border-l border-white mr-2 "></div>
          <div className="w-[33%] mt-2 lg:mt-5 space-y-5 text-white">
            <h2 className="cursor-pointer">Apple </h2>
            <h2 className="cursor-pointer">Samsung</h2>
            <h2 className="cursor-pointer">Infinix</h2>
            <h2 className="cursor-pointer">Realme </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileBrandsNames;
