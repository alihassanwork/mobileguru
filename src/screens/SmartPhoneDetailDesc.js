import React from "react";
import { Footer, ImageAsset, FilterMobileCard, Navbar } from "components";

const leftMenu = [
  {
    title: "Latest Mobiles",
    products: [
      { src: "oppoA9", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
      { src: "oppoA9", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
    ],
  },
  {
    title: "Top 10 By Fans",
    products: [
      { src: "oppoA9", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
      { src: "oppoA9", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
    ],
  },
  {
    title: "Top 10 Compaines",
    products: [
      { src: "oppoA9", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
      { src: "oppoA9", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
    ],
  },
];

const SmartPhoneDetailDesc = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="mainContent mt-20 flex px-10">
        <div className="w-[20%] ">
          {leftMenu.map(({ title, products }) => {
            return <FilterMobileCard title={title} products={products} />;
          })}
        </div>

        <div className="w-[80%] h-full  pb-[20rem]  flex flex-col pl-7 pr-7 ">
          <div className="flex">
            <div className="w-[40%]  pr-2">
              <ImageAsset className="w-full h-full " src="oppo15pro" />
            </div>
            <div className="w-[60%] flex flex-col pl-2 space-y-2 ">
              <ImageAsset className="w-full h-[10rem] " src="BannerImg1" />
              <ImageAsset className="w-full h-[10rem] " src="BannerImg2" />
              <ImageAsset className="w-full h-[10rem] " src="BannerImg3" />
            </div>
          </div>

          <div className="">
            <ImageAsset className="w-full mt-3 h-[13rem] " src="BannerImg1" />
            <ImageAsset className="w-full mt-3 h-[13rem] " src="BannerImg2" />
            <ImageAsset
              className="w-full mt-3 h-[13rem] "
              src="oppoF15proBlue"
            />
          </div>
        </div>
      </div>
      <div className="mt-[10rem]">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default SmartPhoneDetailDesc;
