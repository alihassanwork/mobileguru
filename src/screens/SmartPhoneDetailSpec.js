import React, { useEffect, useState } from "react";
import { Footer, ImageAsset, FilterMobileCard, Navbar } from "components";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getMobileById } from "../redux/actions/mobileActions";
import { baseURL } from "api/baseURL";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
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

const SmartPhoneDetailSpec = () => {
  const { singleMobile } = useSelector((state) => state.mobileReducer);
  const [inputs, setInputs] = useState({});
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFetchMobileById = (value) => dispatch(getMobileById(value));

  useEffect(() => {
    console.log("Hello");
    if (Object.keys(singleMobile).length === 0) {
      console.log("hello 2");
      const id = localStorage.getItem("detailId");
      handleFetchMobileById(id);
    } else {
      return;
    }
  }, [singleMobile, handleFetchMobileById]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SlickArrowRight imgsrc={"rightArrow"} />,
    // prevArrow: <SlickArrowLeft imgsrc={"leftArrow"} />,
  };

  const handleRatingForm = async (e) => {
    console.log(inputs, "rating form values");
  };
  const handleRatingFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const check = Object.keys(singleMobile).length !== 0;
  console.log("detail===>", singleMobile);

  const total = check
    ? singleMobile.reviews.reduce(
        //reduce go through the array and cartItem is the each item in the array
        (accumulatedTotal, review) => accumulatedTotal + parseInt(review.stars),
        0 //0 is the start point of accumulatedTotal
      )
    : 1;
  console.log("total sum===>", total);
  const averageReview = check ? total / singleMobile.reviews.length : 0;
  return (
    <React.Fragment>
      <Navbar />

      <div className="mainContent  mt-5 lg:mt-20  flex flex-col lg:flex-row lg:px-10">
        <div className="w-full lg:w-[20%]  order-2 lg:order-1 px-4 lg:px-0">
          {leftMenu.map(({ title, products }) => {
            return <FilterMobileCard title={title} products={products} />;
          })}
        </div>

        <div className="w-full lg:w-[80%] h-full order-1 lg:order-2  pb-[2rem] bg-[#b0c2d6]  flex flex-col pl-2 pr-2 lg:mt-5 lg:m-5 rounded-[0.2rem] ">
          {/* First Coloum */}
          <div className="border-2 border-black rounded-[0.2rem] p-[1rem] lg:pb-[3rem] flex-col mt-5 w-full">
            <div className="flex flex-col  lg:flex-row">
              <div className=" w-full lg:w-1/4 h-[15rem] lg:h-[20rem]  ">
                {/* carousel start */}
                <div className="pl-8 pr-8">
                  <Slider {...settings}>
                    {Object.keys(singleMobile).length !== 0
                      ? singleMobile.mobilePhotos.map((imageName) => {
                          return (
                            <div>
                              <img
                                className=" object-top p-2  h-[15rem]"
                                src={`${baseURL}${imageName}`}
                                alt={`${singleMobile.brandName}`}
                              />
                            </div>
                          );
                        })
                      : null}
                  </Slider>
                </div>
                {/* carousel ends  */}
              </div>
              <div className="w-full lg:w-1/3 flex-col text-sm lg:mt-[3rem] justify-center h-[10rem]  space-y-5 ">
                <div className="flex ">
                  <ImageAsset
                    className="w-[1.6rem] h-[1.6rem] "
                    src="ChatIcon"
                  />
                  <h1 className="ml-3">
                    <strong>Relase Date </strong>{" "}
                    {singleMobile ? singleMobile.releaseDate : ""}
                  </h1>
                </div>
                <div className="flex ">
                  <ImageAsset
                    className="w-[1.6rem] h-[1.6rem]  "
                    src="phoneIcon"
                  />
                  <h1 className="ml-3">
                    {" "}
                    <strong>Mobile </strong>
                    {singleMobile ? singleMobile.brandName : ""}{" "}
                    {(" ", singleMobile ? singleMobile.modelNumber : "")}
                  </h1>
                </div>
                <div className="flex ">
                  <ImageAsset
                    className="w-[1.6rem] h-[1.6rem]  "
                    src="ChatIcon"
                  />
                  <h1 className="ml-3">
                    <strong>RAM </strong>
                    {Object.keys(singleMobile).length !== 0
                      ? singleMobile.memory.ram.value
                      : ""}
                    {Object.keys(singleMobile).length !== 0
                      ? singleMobile.memory.ram.unit
                      : ""}
                  </h1>
                </div>
                <div className="flex ">
                  <ImageAsset
                    className="w-[1.6rem] h-[1.6rem]  "
                    src="phoneIcon"
                  />
                  <h1 className="ml-3">
                    <strong>ROM </strong>
                    {Object.keys(singleMobile).length !== 0
                      ? singleMobile.memory.rom.value
                      : ""}
                    {Object.keys(singleMobile).length !== 0
                      ? singleMobile.memory.rom.unit
                      : ""}
                  </h1>
                </div>
              </div>
              <div className="flex mt-0 lg:mt-[3rem] h-[10rem] items-center justify-center lg:w-1/3 ">
                <div>
                  <div className="flex justify-center mb-2">
                    <h1>66%</h1>
                  </div>
                  <div>
                    <h1>16,977,86 Hit</h1>
                  </div>
                </div>
                <div className="ml-4">
                  <div>
                    <div className="flex justify-center mb-2">
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
            <div className="w-1/2 text-center cursor-pointer font-bold text-xl ">
              <h1
                className="cursor-pointer"
                onClick={() => {
                  navigate("/phoneDescription");
                }}
              >
                Description
              </h1>
            </div>
            <div className="w-1/2 text-center cursor-pointer font-bold text-xl">
              <h1>Specification</h1>
            </div>
          </div>

          {/* Third Col */}
          <div className="w-full flex-col p-2 rounded-[0.5rem] mt-5 pb-[5rem] border-2 border-black">
            <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
              <div className="lg:w-[40%] text-[#07844C] text-md font-bold ">
                BUILD
              </div>
              <div className="flex-col w-full">
                <div className="flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">OS</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check
                      ? `${singleMobile.build.OS.description}, ${singleMobile.build.OS.type}`
                      : ""}
                  </label>{" "}
                  <br />
                </div>
                <div className=" flex w-full  border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">UI</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.build.UI}` : ""}
                  </label>
                </div>
                <div className=" flex w-full  border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">DIMENSIONS</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.build.dimensions}` : ""}
                  </label>
                </div>
                <div className=" flex w-full  border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">WEIGHT</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.build.weight} Grams` : ""}
                  </label>
                </div>
                <div className=" flex w-full  border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">SIM</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.build.sim}` : ""}
                  </label>
                </div>
                <div className=" flex w-full ">
                  <h3 className="w-1/3 text-sm font-bold">COLORS</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.build.colors}` : ""}
                  </label>
                </div>
              </div>
            </div>

            <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
              <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                FREQUENCY
              </div>
              <div className="flex-col w-full">
                <div className="flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">2G Band</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check
                      ? `${singleMobile.frequency.twoGBand.description}`
                      : ""}
                  </label>{" "}
                  <br />
                </div>
                <div className=" flex w-full  border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">3G Band</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check
                      ? `${singleMobile.frequency.threeGBand.description}`
                      : ""}
                  </label>
                </div>
                <div className=" flex  w-full  border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">4G Band</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%] ">
                    {check
                      ? `${singleMobile.frequency.fourGBand.description}`
                      : ""}
                  </label>
                </div>

                <div className=" flex w-full ">
                  <h3 className="w-1/3 text-sm font-bold">5G Band</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check
                      ? `${singleMobile.frequency.fiveGBand.description}`
                      : ""}
                  </label>
                </div>
              </div>
            </div>
            <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
              <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                PROCESSOR
              </div>
              <div className="flex-col w-full">
                <div className="flex w-full border-black border-b-[0.03rem] ">
                  <h3 className="w-1/3 text-sm font-bold">CPU</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.processor.CPU}` : ""}
                  </label>
                  <br />
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold ">Chipset</h3>
                  <label
                    htmlFor=""
                    className="text-sm font-medium  lg:ml-0 w-[67%]"
                  >
                    {check ? `${singleMobile.processor.chipSet}` : ""}
                  </label>
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">GPU</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.processor.GPU}` : ""}
                  </label>
                </div>
              </div>
            </div>
            {/*DISPLAY*/}
            <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
              <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                DISPLAY
              </div>
              <div className="flex-col w-full">
                <div className="flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">Technology</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.display.technology}` : ""}
                  </label>{" "}
                  <br />
                </div>
                <div className=" flex w-full  border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">Size</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.display.size}` : ""}
                  </label>
                </div>
                <div className=" flex  w-full  border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">Resolution</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%] ">
                    {check ? `${singleMobile.display.resolution}` : ""}
                  </label>
                </div>

                <div className=" flex w-full ">
                  <h3 className="w-1/3 text-sm font-bold">Extra Features</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.display.extraFeatures}` : ""}
                  </label>
                </div>
              </div>
            </div>
            {/*memory*/}
            <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
              <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                MEMORY
              </div>
              <div className="flex-col w-full">
                <div className="flex w-full border-black border-b-[0.03rem] ">
                  <h3 className="w-1/3 text-sm font-bold">RAM</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check
                      ? `${singleMobile.memory.ram.value} ${singleMobile.memory.ram.unit}`
                      : ""}
                  </label>
                  <br />
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold ">ROM / STORAGE</h3>
                  <label
                    htmlFor=""
                    className="text-sm font-medium  lg:ml-0 w-[67%]"
                  >
                    {check
                      ? `${singleMobile.memory.rom.value} ${singleMobile.memory.rom.unit}`
                      : ""}
                  </label>
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">Card</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.memory.card} GB` : ""}
                  </label>
                </div>
              </div>
            </div>
            {/*CAMERA*/}
            <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
              <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                CAMERA
              </div>
              <div className="flex-col w-full">
                <div className="flex w-full border-black border-b-[0.03rem] ">
                  <h3 className="w-1/3 text-sm font-bold">Main Camera</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check
                      ? `${singleMobile.camera.main.value} MP / ${singleMobile.camera.main.description}`
                      : ""}
                  </label>
                  <br />
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold ">Front Camera</h3>
                  <label
                    htmlFor=""
                    className="text-sm font-medium lg:ml-0 w-[67%]"
                  >
                    {check
                      ? `${singleMobile.camera.front.value} MP / ${singleMobile.camera.front.description}`
                      : ""}
                  </label>
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">Features</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.camera.features}` : ""}
                  </label>
                </div>
              </div>
            </div>
            {/*CONNECTIVITY*/}
            <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
              <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                CONNECTIVITY
              </div>
              <div className="flex-col w-full">
                <div className="flex w-full border-black border-b-[0.03rem] ">
                  <h3 className="w-1/3 text-sm font-bold">WLAN</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check
                      ? `${singleMobile.connectivity.WLAN.description}`
                      : ""}
                  </label>
                  <br />
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold ">Bluetooth</h3>
                  <label
                    htmlFor=""
                    className="text-sm font-medium lg:ml-0 w-[67%]"
                  >
                    {check
                      ? `${singleMobile.connectivity.bluetooth.description}`
                      : ""}
                  </label>
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">GPS</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check
                      ? `${singleMobile.connectivity.GPS.description}`
                      : ""}
                  </label>
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">Radio</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check
                      ? `${singleMobile.connectivity.radio.description}`
                      : ""}
                  </label>
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">USB</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check
                      ? `${singleMobile.connectivity.USB.description}`
                      : ""}
                  </label>
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">NFC</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check
                      ? `${singleMobile.connectivity.NFC.description}`
                      : ""}
                  </label>
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">Data</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check
                      ? `${singleMobile.connectivity.data.description}`
                      : ""}
                  </label>
                </div>
              </div>
            </div>
            {/*FEATURES*/}
            <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
              <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                FEATURES
              </div>
              <div className="flex-col w-full">
                <div className="flex w-full border-black border-b-[0.03rem] ">
                  <h3 className="w-1/3 text-sm font-bold">Sensors</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.features.sensor}` : ""}
                  </label>
                  <br />
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold ">Audio</h3>
                  <label
                    htmlFor=""
                    className="text-sm font-medium lg:ml-0 w-[67%]"
                  >
                    {check ? `${singleMobile.features.audio}` : ""}
                  </label>
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">Browser</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.features.browser}` : ""}
                  </label>
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">Messaging</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.features.messaging}` : ""}
                  </label>
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">Games</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.features.games}` : ""}
                  </label>
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">Torch</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.features.torch}` : ""}
                  </label>
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold">Extra</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check
                      ? `${
                          singleMobile.features.extra
                            ? singleMobile.features.extra
                            : "Nil"
                        }`
                      : ""}
                  </label>
                </div>
              </div>
            </div>
            {/*BATTERY*/}
            <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
              <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                BATTERY
              </div>
              <div className="flex-col w-full">
                <div className="flex w-full border-black border-b-[0.03rem] ">
                  <h3 className="w-1/3 text-sm font-bold">Capacity</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `${singleMobile.battery.capacity} mAh` : ""}
                  </label>
                  <br />
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold ">Description</h3>
                  <label
                    htmlFor=""
                    className="text-sm font-medium lg:ml-0 w-[67%]"
                  >
                    {check ? `${singleMobile.battery.description}` : ""}
                  </label>
                </div>
              </div>
            </div>
            {/*PRICE*/}
            <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
              <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                PRICE
              </div>
              <div className="flex-col w-full">
                <div className="flex w-full border-black border-b-[0.03rem] ">
                  <h3 className="w-1/3 text-sm font-bold">Price in Rs</h3>
                  <label htmlFor="" className="text-sm font-medium w-[67%]">
                    {check ? `Price in Rs: ${singleMobile.priceInPKR}` : ""}
                  </label>
                  <br />
                </div>
                <div className=" flex w-full border-black border-b-[0.03rem]">
                  <h3 className="w-1/3 text-sm font-bold ">Price in USD</h3>
                  <label
                    htmlFor=""
                    className="text-sm font-medium lg:ml-0 w-[67%]"
                  >
                    {check ? ` Price in USD: $${singleMobile.priceInUSD}` : ""}{" "}
                    {Math.round(averageReview * 10) / 10}
                  </label>
                </div>
              </div>
            </div>
            {/*RATING*/}
            <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
              <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                Rating
              </div>
              <div className="flex-col w-full">
                <div className=" flex w-full">
                  {averageReview ? (
                    <label
                      htmlFor=""
                      className="text-sm font-medium lg:ml-0 w-[67%]"
                    >
                      Average Rating is{" "}
                      <strong>
                        {Math.round(averageReview * 10) / 10} stars
                      </strong>
                      - based on{" "}
                      <strong>
                        {check ? singleMobile.reviews.length : 0}{" "}
                      </strong>
                      user reviews.
                    </label>
                  ) : (
                    <label
                      htmlFor=""
                      className="text-sm font-medium lg:ml-0 w-[67%]"
                    >
                      <strong>NOT RATED YET</strong>
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md  bg-transparent">
                <form
                  onSubmit={handleRatingForm}
                  className="bg-transparent  rounded  mx-auto px-8 pt-6 pb-8 mb-4"
                >
                  <div className="mb-4">
                    <h3 className="block  text-sm font-bold mb-2" for="name">
                      Name
                    </h3>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      value={inputs.name || ""}
                      onChange={handleRatingFormChange}
                    />
                  </div>
                  <div className="mb-6">
                    <h3 className="block text-sm font-bold mb-2" for="email">
                      Email
                    </h3>
                    <input
                      className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      value={inputs.email || ""}
                      onChange={handleRatingFormChange}
                    />
                  </div>
                  <div className="mb-4">
                    <h3 className="block  text-sm font-bold mb-2" for="opinion">
                      Opinion
                    </h3>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="opinion"
                      type="text"
                      value={inputs.opinion || ""}
                      onChange={handleRatingFormChange}
                    />
                  </div>
                  <div className="my-4">
                    <h3 className="block  text-sm font-bold mb-2" for="rating">
                      Rating
                    </h3>
                    <div>
                      <label className="flex items-center gap-1">
                        <input type="radio" name="star" value="1" />{" "}
                        <FaStar className="text-[#F4871E]" />
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center gap-1">
                        <input type="radio" name="star" value="2" />
                        <FaStar className="text-[#F4871E]" />
                        <FaStar className="text-[#F4871E]" />
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center gap-1">
                        <input type="radio" name="star" value="3" />
                        <FaStar className="text-[#F4871E]" />
                        <FaStar className="text-[#F4871E]" />
                        <FaStar className="text-[#F4871E]" />
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center gap-1">
                        <input type="radio" name="star" value="4" />
                        <FaStar className="text-[#F4871E]" />
                        <FaStar className="text-[#F4871E]" />
                        <FaStar className="text-[#F4871E]" />
                        <FaStar className="text-[#F4871E]" />
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center gap-1">
                        <input type="radio" name="star" value="5" />
                        <FaStar className="text-[#F4871E]" />
                        <FaStar className="text-[#F4871E]" />
                        <FaStar className="text-[#F4871E]" />
                        <FaStar className="text-[#F4871E]" />
                        <FaStar className="text-[#F4871E]" />
                      </label>
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <button
                      className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-8  rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Add Review
                    </button>
                  </div>
                </form>
              </div>
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

export default SmartPhoneDetailSpec;
