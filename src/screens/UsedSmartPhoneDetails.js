import React, { useEffect } from "react";
import { Footer, FilterMobileCard, Navbar } from "components";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsedMobileById } from "../redux/actions/mobileActions";
import { baseURL } from "api/baseURL";
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
const sliderData = [
  {
    imageName: "carouselImage",
  },
  {
    imageName: "OppoPhoneRed",
  },
  {
    imageName: "Infinix",
  },
];

const UsedSmartPhoneDetails = () => {
  const navigate = useNavigate();
  const { singleMobile } = useSelector((state) => state.mobileReducer);
  const dispatch = useDispatch();
  const handleFetchMobileById = (value) => dispatch(getUsedMobileById(value));
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SlickArrowRight imgsrc={"rightArrow"} />,
    // prevArrow: <SlickArrowLeft imgsrc={"leftArrow"} />,
  };
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

  const check = Object.keys(singleMobile).length !== 0;
  console.log("singleMobile==>", singleMobile);
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
            <div className="flex flex-col justify-center  lg:flex-row">
              {/* carousel start */}
              <div className=" w-full pl-8 pr-8">
                <Slider {...settings}>
                  {check
                    ? singleMobile.usedMobilePhotos.map((imageName) => {
                        return (
                          <div className="flex">
                            <div className="flex  justify-center">
                              <img
                                className="h-[15rem]"
                                src={`${baseURL}${imageName}`}
                                alt={`${singleMobile.brandName}`}
                              />
                            </div>
                          </div>
                        );
                      })
                    : null}
                </Slider>
              </div>
              {/* carousel ends  */}
            </div>
          </div>

          {/* second col */}
          <div className="bg-white w-full flex pt-5 pb-5 rounded-[0.5rem] mt-5 border-[0.03rem] border-black">
            <div className="w-full text-center font-bold text-xl border-l-[0.05rem] border-black">
              <h1 className="text-center">Specification</h1>
            </div>
          </div>
          {/*Third Col  */}
          <div className="w-full flex-col">
            <div className="w-full flex border-b-2 border-[black] pt-4 pb-2">
              <div className="w-1/2 text-[#07844C] font-bold text-lg">
                BrandName
              </div>
              <div className="w-1/2 text-[black] font-bold">
                {" "}
                {singleMobile ? singleMobile.brandName : ""}
              </div>
            </div>
            <div className="w-full flex border-b-2 border-[black] pt-4 pb-2">
              <div className="w-1/2 text-[#07844C] font-bold text-lg">Ram </div>
              <div className="w-1/2 text-[black] font-bold">
                {" "}
                {singleMobile ? singleMobile.ram : ""}
              </div>
            </div>
            <div className="w-full flex border-b-2 border-[black] pt-4 pb-2">
              <div className="w-1/2 text-[#07844C] font-bold text-lg">
                Rom / Storage{" "}
              </div>
              <div className="w-1/2 text-[black] font-bold">
                {" "}
                {singleMobile ? singleMobile.rom : ""}
              </div>
            </div>

            <div className="w-full flex border-b-2 border-[black] pt-4 pb-2">
              <div className="w-1/2 text-[#07844C] font-bold text-lg">
                Condition{" "}
              </div>
              <div className="w-1/2 text-[black] font-bold">
                {" "}
                {singleMobile ? singleMobile.condition : ""}
              </div>
            </div>

            <div className="w-full flex border-b-2 border-[black] pt-4 pb-2">
              <div className="w-1/2 text-[#07844C] font-bold text-lg">
                Price{" "}
              </div>
              <div className="w-1/2 text-[black] font-bold">
                {" "}
                {singleMobile ? singleMobile.price : ""}
              </div>
            </div>

            <div className="w-full flex border-b-2 border-[black] pt-4 pb-2">
              <div className="w-1/2 text-[#07844C] font-bold text-lg">
                Location{" "}
              </div>
              <div className="w-1/2 text-[black] font-bold">
                {" "}
                {singleMobile ? singleMobile.location : ""}
              </div>
            </div>
            <div className="w-full flex border-b-2 border-[black] pt-4 pb-2">
              <div className="w-1/2 text-[#07844C] font-bold text-lg">
                Contact No{" "}
              </div>
              <div className="w-1/2 text-[black] font-bold">
                {" "}
                {singleMobile ? singleMobile.contactNo : ""}
              </div>
            </div>
          </div>

          {/* Fourth Col */}
          <div className="w-full flex-col px-2 rounded-[0.5rem] mt-5 pb-[5rem] border-2 border-black">
            <div className="w-full text-xs mt-5">
              <h2 className="text-lg font-semibold">Detail Summary</h2>
              <p>{singleMobile ? singleMobile.description : ""}</p>
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

export default UsedSmartPhoneDetails;
