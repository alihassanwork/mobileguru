import React from "react";
import {
  Footer,
  ImageAsset,
  Navbar,
  MobileBrandsNames,
  Multiselect,
} from "components";
import InputRangee from "components/InputRange";
import { RightSideMenu, LeftSideMenu } from "megaComponents";

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
const Test = () => {
  return (
    <>
      <React.Fragment>
        <Navbar />
        <div className="mainContent mt-5 lg:mt-20 flex flex-col lg:flex-row md:px-10">
          <div className="lg:w-[20%] mb-10 px-10 md:px-0">
            <MobileBrandsNames />
            <LeftSideMenu />
          </div>

          <main className="bg-slate-200  md:mx-10 rounded-lg lg:w-[60%] pb-6 h-auto">
            <h1 className="bg-buttonBgcolorGradian2 w-[100%]  flex p-5 justify-center text-white text-xl">
              Show 3 Result
            </h1>
            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              GENERAL
            </h2>
            <div class="w-full md:w-1/2 px-3 md:mb-6 md:mb-0 inline-block">
              <div class="relative">
                <Multiselect />
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3 my-1 md:my-6 inline-block md:mb-0">
              <div class="relative">
                <select
                  class="block appearance-none w-full  border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-[90%] bg-white pb-6 px-4 md:p-6 mb-3 mx-auto">
              <h2 className="mb-6">Price</h2>
              <InputRangee />
            </div>
            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              CONNECTIVITY
            </h2>

            <div className="w-[90%] bg-white pl-1 pt-1 md:p-3  md:my-3 mx-auto flex  flex-wrap">
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base text-xs md:text-base"
                  for="flexCheckDefault"
                >
                  first one
                </label>
              </div>
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault1"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base text-xs md:text-base"
                  for="flexCheckDefault1"
                >
                  Default checkbox
                </label>
              </div>
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault2"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="flexCheckDefault2"
                >
                  Default checkbox
                </label>
              </div>
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault5"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="flexCheckDefault5"
                >
                  Default checkbox
                </label>
              </div>
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault3"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="flexCheckDefault3"
                >
                  Default checkbox
                </label>
              </div>
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault4"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="flexCheckDefault4"
                >
                  Default checkbox
                </label>
              </div>
            </div>
            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5flex text-white text-xl">
              PLATFORM
            </h2>
            <div className="bg-white w-[90%] md:p-4 md:pb-8 mt-3 px-8 mx-auto">
              <div class="relative">
                <Multiselect />
              </div>
            </div>
            <div className=" bg-white w-[90%] my-3 mx-auto p-4 pb-8 px-8 flex flex-col md:flex-row justify-between">
              <div className="md:w-[45%] mb-6">
                <h2 className="mb-8  font-bold">Processor</h2>
                <InputRangee />
              </div>
              <div className="md:w-[45%]">
                <h2 className="mb-8 font-bold">Cores</h2>
                <InputRangee />
              </div>
            </div>

            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              MEMORY
            </h2>
            <div className=" bg-white w-[90%] my-3 mx-auto p-4 pb-8 px-8 flex flex-col md:flex-row justify-between">
              <div className="w-[45%] mb-6">
                <h2 className="mb-8  font-bold">RAM</h2>
                <InputRangee />
              </div>
              <div className="w-[45%]">
                <h2 className="mb-8 font-bold">Built-in Memory</h2>
                <InputRangee />
              </div>
            </div>
            <div className="w-[90%] bg-white p-3 my-3 mx-auto flex flex-wrap">
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault6"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="flexCheckDefault6"
                >
                  Card slot
                </label>
              </div>
            </div>
            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              DISPLAY
            </h2>
            <div className="w-[90%] bg-white p-6 m-3 mx-auto">
              <h2 className="mb-6">Screen Size</h2>
              <InputRangee />
            </div>
            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              CAMERA
            </h2>
            <div className="w-[90%] bg-white p-6 m-3 mx-auto">
              <h2 className="mb-6">Primary Camera</h2>
              <InputRangee />
            </div>
            <div className="w-[90%] bg-white p-3 my-3 mx-auto flex flex-wrap">
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault7"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="flexCheckDefault7"
                >
                  Camera Flash
                </label>
              </div>
            </div>
            <div className="w-[90%] bg-white p-6 m-3 mx-auto">
              <h2 className="mb-6">Secondary Camera</h2>
              <InputRangee />
            </div>
            <div className="w-[90%] bg-white p-3 my-3 mx-auto flex flex-wrap">
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault8"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="flexCheckDefault8"
                >
                  Front Flash
                </label>
              </div>
            </div>
            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              SENSORS
            </h2>

            <div className="w-[90%] bg-white pl-1 pt-1 md:p-3 my-3 mx-auto flex flex-wrap">
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault9"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="flexCheckDefault9"
                >
                  Default checkbox
                </label>
              </div>
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault10"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="flexCheckDefault10"
                >
                  Default checkbox
                </label>
              </div>
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault12"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="flexCheckDefault12"
                >
                  Default checkbox
                </label>
              </div>
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault15"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="flexCheckDefault15"
                >
                  Default checkbox
                </label>
              </div>
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault13"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="flexCheckDefault13"
                >
                  Gyro
                </label>
              </div>
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault14"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="flexCheckDefault14"
                >
                  Accelerometer
                </label>
              </div>
            </div>
            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              BATTERY
            </h2>
            <div className="w-[90%] bg-white p-6 m-3 mx-auto">
              <h2 className="mb-6">Capacity</h2>
              <InputRangee />
            </div>
            <div className="w-[90%] bg-white p-3 my-3 mx-auto flex flex-wrap">
              <div class="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="Fast Charging"
                />
                <label
                  class="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  for="Fast Charging"
                >
                  Fast Charging
                </label>
              </div>
            </div>
            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              MISCELLANEOUS
            </h2>
            <div className="bg-white w-[90%] p-4 pb-8 mt-3 px-8 mx-auto">
              <div class="relative">
                <Multiselect />
              </div>
            </div>
            <div className="bg-white w-[90%] my-3 mx-auto p-4 pb-8 px-8 flex flex-col md:flex-row justify-between">
              <div className="w-[45%] mb-6">
                <h2 className="mb-8  font-bold">Weight</h2>
                <InputRangee />
              </div>
              <div className="w-[45%]">
                <h2 className="mb-8 font-bold">Slimness</h2>
                <InputRangee />
              </div>
            </div>
          </main>
        </div>
        <div className="mt-[10rem]">
          <Footer />
        </div>
      </React.Fragment>
    </>
  );
};

export default Test;
