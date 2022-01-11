import React from "react";
import {
  FilterCard,
  Footer,
  ImageAsset,
  FilterMobileCard,
  Navbar,
  MobileBrandCard,
} from "components";

const rightMenu = [
  {
    title: "Price",
    heading: "Less Then One 10000",
    description: ["10000 To 20000", "20000 To 30000", "30000 To 40000"],
  },
  {
    title: "RAM",
    heading: "Less Then 1 GB",
    description: ["1 GB to 2 GB", "2 GB to 3 GB", "3 GB to 4 GB"],
  },
  {
    title: "Memory",
    heading: "Less Then 16 GB",
    description: ["16 GB To 32 GB", "32 GB To 64 GB", "64 GB To 128 GB"],
  },
  {
    title: "Display",
    heading: "Less Then 4 Inches",
    description: [
      "4.1 Inches To 5.0 Inches",
      "5.1 Inches To 6 Inches",
      "6.1 Inches To 7 Inches",
    ],
  },
  {
    title: "OS",
    heading: "",
    description: ["Andriod", "IOS", "Symbion", "Windows"],
  },
  {
    title: "Camera",
    heading: "Less Then 8 MP",
    description: ["8 MP To 16 MP", "16 MP To 32 M", "32 MP To 64 MP"],
  },
  {
    title: "Selfi Camera",
    heading: "Less Then 8 MP",
    description: ["8 MP To 16 MP", "16 MP To 32 MP", "32 MP To 64 MP"],
  },
  {
    title: "Battery",
    heading: "Less Then 4000 MAH",
    description: ["4000 MAH To 4500 MAH", "4500 MAH To 5000 MAH"],
  },
];

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
      { src: "oppoReno2", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
      { src: "oppoReno2", name: "oppoReno2" },
    ],
  },
];
const MobileBrand = [
  {
    mobilesNames: [{ Name: ["Apple", "Samsung", "Infinix", "RealMe"] }],
  },
  {
    mobilesNames: [{ Name: ["Apple", "Samsung", "Infinix", "RealMe"] }],
  },
  {
    mobilesNames: [{ Name: ["Apple", "Samsung", "Infinix", "RealMe"] }],
  },
];

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="mainContent mt-20 flex flex-col lg:flex-row px-10">
        <div className="lg:w-[20%] ">
          <div className="card rounded-tl-[4rem]  rounded-b-[4rem] bg-backgroundGreenColor w-full">
            <div className="cardRow w-full text-center pt-5 pb-5 text-white">
              <h1>Mobile Brands Names</h1>
            </div>
            <div className="w-full border-b border-white mr-2  "></div>
            <div className="flex text-sm pl-3 pr-3">
              <div className="w-[33%] space-y-5 mt-5 pb-[8rem] text-white">
                <h2>Apple </h2>
                <h2>Samsung</h2>
                <h2>Infinix</h2>
                <h2>Realme </h2>
              </div>
              <div className="border-l border-white mr-2 "></div>
              <div className="w-[33%] space-y-5 text-white mt-5">
                <h2>Apple </h2>
                <h2>Samsung</h2>
                <h2>Infinix</h2>
                <h2>Realme </h2>
              </div>
              <div className="border-l border-white mr-2 "></div>
              <div className="w-[33%] space-y-5 text-white mt-5">
                <h2>Apple </h2>
                <h2>Samsung</h2>
                <h2>Infinix</h2>
                <h2>Realme </h2>
              </div>
            </div>
          </div>

          {leftMenu.map(({ title, products }) => {
            return <FilterMobileCard title={title} products={products} />;
          })}
        </div>

        <div className="lg:w-[60%] h-full  pb-[20rem]  flex flex-col pl-7 pr-7 order-3 lg:order-2">
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
        <div className="lg:w-[20%]  text-center order-2 lg:order-3">
          <div className="flex flex-col">
            <button className="w-auto border-2 bg-transparent p-1  rounded-[1rem]">
              Advance Search
            </button>
            <button className="w-auto border-2 bg-transparent mt-8 p-1  rounded-[1rem]">
              Videos Reviews
            </button>
            <button className="w-auto text-white  bg-backgroundGreenColor text-xs mt-1 p-1 pl-[2rem] pr-[2rem] rounded-[1rem]">
              Wanna Buy And Sell Used <br /> Smarts Phone
            </button>
          </div>

          {rightMenu.map(({ title, heading, description }) => {
            return (
              <FilterCard title={title} heading={heading}>
                {description.map((item) => {
                  return <h1>{item}</h1>;
                })}
              </FilterCard>
            );
          })}
        </div>
      </div>
      <div className="mt-[10rem]">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
