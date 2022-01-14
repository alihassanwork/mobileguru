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

      <div className="mainContent mt-20  flex flex-col lg:flex-row lg:px-10">
        <div className="w-full lg:w-[20%] px-4 lg:px-0">
          {leftMenu.map(({ title, products }) => {
            return <FilterMobileCard title={title} products={products} />;
          })}
        </div>

        <div className="w-full lg:w-[80%] h-full  pb-[20rem] bg-[#b0c2d6] flex flex-col pl-2 pr-2 mt-3  lg:m-5 rounded-[0.2rem] ">
          {/* First Coloum */}
          <div className="border-2 border-black rounded-[0.2rem] p-[1rem] lg:pb-[3rem] flex-col mt-5 w-full">
            <div className="flex flex-col lg:flex-row">
              <div className=" w-full lg:w-1/4 h-[15rem] lg:h-[20rem]  ">
                <ImageAsset
                  className=" object-top p-2  h-[15rem]"
                  src="carouselImage"
                />
              </div>
              <div className="w-full lg:w-1/3 flex-col text-sm lg:mt-[3rem] justify-center h-[10rem]  space-y-5 ">
                <div className="flex ">
                  <ImageAsset
                    className="w-[1.6rem] h-[1.6rem] "
                    src="ChatIcon"
                  />
                  <h1 className="ml-3">Relesed 2021, April</h1>
                </div>
                <div className="flex ">
                  <ImageAsset
                    className="w-[1.6rem] h-[1.6rem]  "
                    src="phoneIcon"
                  />
                  <h1 className="ml-3">Relesed 2021, April</h1>
                </div>
                <div className="flex ">
                  <ImageAsset
                    className="w-[1.6rem] h-[1.6rem]  "
                    src="ChatIcon"
                  />
                  <h1 className="ml-3">Relesed 2021, April</h1>
                </div>
                <div className="flex ">
                  <ImageAsset
                    className="w-[1.6rem] h-[1.6rem]  "
                    src="phoneIcon"
                  />
                  <h1 className="ml-3">Relesed 2021, April</h1>
                </div>
              </div>
              <div className="flex mt-0 lg:mt-[3rem] h-[10rem] items-center justify-center lg:w-1/3 ">
                <div>
                  <div className="flex justify-center">
                    <h1>66%</h1>
                  </div>
                  <div>
                    <h1>16,977,86 Hit</h1>
                  </div>
                </div>
                <div className="ml-4">
                  <div>
                    <div className="flex justify-center">
                      <ImageAsset
                        className="w-[1.6rem] h-[1.6rem]  "
                        src="starIcon"
                      />
                    </div>
                    <div>
                      <h1>Become Like 17234</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex w-full  justify-center   lg:mt-[-4rem]  lg:gap-x-16 text-xs">
                <div>
                  <div className="flex justify-center ">
                    <ImageAsset
                      className="w-[2.6rem] h-[2.6rem]   "
                      src="phoneIcon"
                    />
                  </div>
                  <div>
                    <h1>Relesed 2021, April</h1>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <ImageAsset
                      className="w-[2.6rem] h-[2.6rem]   "
                      src="phoneIcon"
                    />
                  </div>
                  <div>
                    <h1>Relesed 2021, April</h1>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <ImageAsset
                      className="w-[2.6rem] h-[2.6rem]   "
                      src="phoneIcon"
                    />
                  </div>
                  <div>
                    <h1>Relesed 2021, April</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* second col */}
          <div className="bg-white w-full flex pt-5 pb-5 rounded-[0.5rem] mt-5 border-2 border-black">
            <div className="w-1/2 text-center font-bold text-xl ">
              <h1>Description</h1>
            </div>
            <div className="w-1/2 text-center font-bold text-xl">
              <h1>Specification</h1>
            </div>
          </div>

          {/* Third Col */}
          <div className="w-full flex-col p-2 rounded-[0.5rem] mt-5 pb-[5rem] border-2 border-black">
            <div className="w-full text-xs mt-5">
              <p>
                Aliqua ad aliqua veniam est laborum qui ex Lorem enim do
                deserunt mollit eu. Dolore est irure anim deserunt nisi est.
                Aute officia et ipsum ullamco ullamco voluptate fugiat. Elit
                commodo ullamco do deserunt velit aliqua commodo exercitation
                tempor. Lorem dolor veniam nisi occaecat proident eu consequat
                aute ullamco id fugiat est. Magna incididunt et in excepteur
                ullamco adipisicing laboris aliquip.
              </p>
            </div>
            <div className="w-full text-xs mt-5">
              <p>
                Aliqua ad aliqua veniam est laborum qui ex Lorem enim do
                deserunt mollit eu. Dolore est irure anim deserunt nisi est.
                Aute officia et ipsum ullamco ullamco voluptate fugiat. Elit
                commodo ullamco do deserunt velit aliqua commodo exercitation
                tempor. Lorem dolor veniam nisi occaecat proident eu consequat
                aute ullamco id fugiat est. Magna incididunt et in excepteur
                ullamco adipisicing laboris aliquip.
              </p>
            </div>
            <div className="w-full text-xs mt-5">
              <p>
                Aliqua ad aliqua veniam est laborum qui ex Lorem enim do
                deserunt mollit eu. Dolore est irure anim deserunt nisi est.
                Aute officia et ipsum ullamco ullamco voluptate fugiat. Elit
                commodo ullamco do deserunt velit aliqua commodo exercitation
                tempor. Lorem dolor veniam nisi occaecat proident eu consequat
                aute ullamco id fugiat est. Magna incididunt et in excepteur
                ullamco adipisicing laboris aliquip.
              </p>
            </div>
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
