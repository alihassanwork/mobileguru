import React from "react";
import {
  FilterCard,
  Footer,
  ImageAsset,
  FilterMobileCard,
  Navbar,
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
const UsedMobileUploadAdDetails = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="mainContent mt-20 flex flex-col  lg:flex-row px-2 lg:px-10">
        <div className="lg:w-[20%] order-2  ">
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

        <div className="lg:w-[60%] rounded-lg h-full  pb-0 lg:pb-[5rem]  flex flex-col pl-7 lg:ml-4 lg:mr-4 pr-7 mt-10 mt-[-2rem] lg:mt-0  order-1 lg:order-2 bg-center  bg-[url('assets/images/backgroundImageMainScreen.png')]">
          <div className="flex flex-col  lg:flex-row">
            <ImageAsset
              className=" object-top p-2  h-[20rem]"
              src="OppoPhoneRed"
            />
          </div>
          <div className="flex-col mb-10 w-full">
            <button className=" lg:ml-16 p-3  pl-8 pr-8 text-xs border-black border-[0.03rem] rounded-lg">
              {" "}
              Upload Image{" "}
            </button>
          </div>
          <div className="flex-col mt-4  w-full">
            <h2 className="text-sm font-semibold">Brand Name</h2>
            <input
              type="text"
              className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
            />
          </div>
          <div className="flex-col mt-4  w-full">
            <h2 className="text-sm font-semibold">RAM/ROM</h2>
            <input
              type="text"
              className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
            />
          </div>
          <div className="flex-col mt-4  w-full">
            <h2 className="text-sm font-semibold">Condition</h2>
            <input
              type="text"
              className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
            />
          </div>
          <div className="flex-col mt-4  w-full">
            <h2 className="text-sm font-semibold">Price</h2>
            <input
              type="text"
              className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
            />
          </div>

          <div className="flex-col mt-4  w-full">
            <h2 className="text-sm font-semibold">Location</h2>
            <input
              type="text"
              className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
            />
          </div>
          <div className="flex-col mt-4  w-full">
            <h2 className="text-sm font-semibold">Contact No</h2>
            <input
              type="text"
              className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
            />
          </div>
          <div className="flex-col w-full mt-10 justify-center mb-5 text-center">
            <button className="p-3 pl-16 pr-16 text-xs font-bold bg-white rounded-lg">
              Post Now
            </button>
          </div>
        </div>
        <div className="lg:w-[20%]  text-center order-3 lg:order-3">
          <div className="flex flex-col">
            <button className="w-auto border-2 bg-transparent p-1 mt-5 lg:mt-0  rounded-[1rem]">
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

export default UsedMobileUploadAdDetails;
