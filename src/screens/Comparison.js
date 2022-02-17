import React from "react";
import { Footer, Navbar, ImageAsset } from "components";
const Comparison = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="w-full  flex mt-20 pl-3 pr-3 lg:pl-20 lg:pr-20 ">
        <div className=" w-full flex-col">
          <div className="flex flex-col lg:flex-row bg-[#D2DCE7] ">
            {/* left Compare */}
            <div className=" w-full lg:w-1/2 flex-col  ">
              <div className="flex-col w-full bg-white pb-5">
                <h3 className="text-sm font-medium">Compare With</h3>
                <button className="w-[90%] lg:w-[80%] text-center text-white font-medium  bg-buttonBgColor bg-gradient-to-b text-sm lg:text-md p-3 lg:pl-10 rounded-[0.5rem] mt-2 from-buttonBgColorGradian1 to-buttonBgcolorGradian2">
                  Oppo f9 30
                </button>
              </div>
              <div className="w-full lg:w-[70%] text-xs pb-3 font-medium mt-[0.4rem] lg:ml-1 flex flex-col justify-centerc text-center border-2 rounded-md border-black">
                <ImageAsset
                  className=" object-top p-2  object-contain h-[20rem]"
                  src="carouselImage"
                />
                <h3>oppo f9</h3>
                <h3>Rs 50000</h3>
                <div className="flex w-full  justify-center">
                  <ImageAsset
                    className="w-[2.6rem] object-contain  h-[2.6rem]   "
                    src="phoneIcon"
                  />
                </div>
                <h3>Relesed 2021, Apr</h3>
              </div>
              <div className="pl-2 mt-5 flex justify-center md:justify-start mb-5">
                <button className="rounded-2xl text-center p-[0.3rem] text-lg font-bold w-[70%]  bg-white">
                  Specification
                </button>
              </div>
              <div className="w-full flex-col p-2 rounded-[0.5rem] mt-5 pb-[5rem] ">
                <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                  <div className="lg:w-[40%] text-[#07844C] text-md font-bold ">
                    NETWORK
                  </div>
                  <div className="flex-col w-full">
                    <div className="flex w-full ">
                      <h3 className="w-1/3 text-sm font-bold">Technology</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        GSM/ CDMA / HSPA / EVDO/ LTE/ 5G
                      </label>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                  <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                    LUNCH
                  </div>
                  <div className="flex-col w-full">
                    <div className="flex w-full border-black border-b-[0.03rem]">
                      <h3 className="w-1/3 text-sm font-bold">Announced</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        2021, MACRH 29
                      </label>{" "}
                      <br />
                    </div>
                    <div className=" flex w-full">
                      <h3 className="w-1/3 text-sm font-bold">Status</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        Available Released 2021, April 02
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                  <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                    BODY
                  </div>
                  <div className="flex-col w-full">
                    <div className="flex w-full border-black border-b-[0.03rem] ">
                      <h3 className="w-1/3 text-sm font-bold">Diemension</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        164 x 74.6 x 8.5 mm ( 6.47 x 2.94 x 0.33 in )
                      </label>
                      <br />
                    </div>
                    <div className=" flex w-full border-black border-b-[0.03rem]">
                      <h3 className="w-1/3 text-sm font-bold ">Weight</h3>
                      <label
                        htmlFor=""
                        className="text-sm font-medium ml-[-1rem] lg:ml-0"
                      >
                        208g ( 7.34 oz )
                      </label>
                    </div>
                    <div className=" flex w-full border-black border-b-[0.03rem]">
                      <h3 className="w-1/3 text-sm font-bold">SIM</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        Dual SIM ( Nano_ SIM, Dual Stand By ) IP68 <br />
                        Dust water Resiistant ( up to 1.5m For 30Min)
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                  <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                    BODY
                  </div>
                  <div className="flex-col w-full">
                    <div className="flex w-full border-black border-b-[0.03rem] ">
                      <h3 className="w-1/3 text-sm font-bold">Diemension</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        164 x 74.6 x 8.5 mm ( 6.47 x 2.94 x 0.33 in )
                      </label>
                      <br />
                    </div>
                    <div className=" flex w-full border-black border-b-[0.03rem]">
                      <h3 className="w-1/3 text-sm font-bold">Weight</h3>
                      <label className="text-sm font-medium ml-[-1rem] lg:ml-0">
                        208g ( 7.34 oz )
                      </label>
                    </div>
                    <div className=" flex w-full border-black border-b-[0.03rem]">
                      <h3 className="w-1/3 text-sm font-bold">SIM</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        Dual SIM ( Nano_ SIM, Dual Stand By ) IP68 <br />
                        Dust water Resiistant ( up to 1.5m For 30Min)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right side  compare  */}
            <div className="w-full lg:w-1/2 flex-col  ">
              <div className="flex-col w-full bg-white pb-5">
                <h3 className="text-sm font-medium">Compare With</h3>
                <button className="w-[90%] lg:w-[80%] text-center text-white font-medium  bg-buttonBgColor bg-gradient-to-b text-sm lg:text-md p-3 lg:pl-10 rounded-[0.5rem] mt-2 from-buttonBgColorGradian1 to-buttonBgcolorGradian2">
                  Iphone 12
                </button>
              </div>
              <div className="w-full lg:w-[70%] text-xs pb-3 font-medium mt-[0.4rem] lg:ml-1 flex flex-col justify-centerc text-center border-2 rounded-md border-black">
                <ImageAsset
                  className=" object-top p-2 object-contain  h-[20rem]"
                  src="IphoneRed"
                />
                <h3>oppo f9</h3>
                <h3>Rs 50000</h3>
                <div className="flex w-full justify-center">
                  <ImageAsset
                    className="w-[2.6rem] object-contain h-[2.6rem]   "
                    src="phoneIcon"
                  />
                </div>
                <h3>Relesed 2021, Apr</h3>
              </div>
              <div className="pl-2 mt-5 mb-5">
                <button className="rounded-2xl text-center p-[0.3rem] text-lg font-bold w-[70%]  bg-white">
                  Specification
                </button>
              </div>
              <div className="w-full flex-col p-2 rounded-[0.5rem] mt-5 pb-[5rem] ">
                <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                  <div className="lg:w-[40%] text-[#07844C] text-md font-bold ">
                    NETWORK
                  </div>
                  <div className="flex-col w-full">
                    <div className="flex w-full ">
                      <h3 className="w-1/3 text-sm font-bold">Technology</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        GSM/ CDMA / HSPA / EVDO/ LTE/ 5G
                      </label>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                  <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                    LUNCH
                  </div>
                  <div className="flex-col w-full">
                    <div className="flex w-full border-black border-b-[0.03rem]">
                      <h3 className="w-1/3 text-sm font-bold">Announced</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        2021, MACRH 29
                      </label>{" "}
                      <br />
                    </div>
                    <div className=" flex w-full">
                      <h3 className="w-1/3 text-sm font-bold">Status</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        Available Released 2021, April 02
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                  <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                    BODY
                  </div>
                  <div className="flex-col w-full">
                    <div className="flex w-full border-black border-b-[0.03rem] ">
                      <h3 className="w-1/3 text-sm font-bold">Diemension</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        164 x 74.6 x 8.5 mm ( 6.47 x 2.94 x 0.33 in )
                      </label>
                      <br />
                    </div>
                    <div className=" flex w-full border-black border-b-[0.03rem]">
                      <h3 className="w-1/3 text-sm font-bold ">Weight</h3>
                      <label
                        htmlFor=""
                        className="text-sm font-medium ml-[-1rem] lg:ml-0"
                      >
                        208g ( 7.34 oz )
                      </label>
                    </div>
                    <div className=" flex w-full border-black border-b-[0.03rem]">
                      <h3 className="w-1/3 text-sm font-bold">SIM</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        Dual SIM ( Nano_ SIM, Dual Stand By ) IP68 <br />
                        Dust water Resiistant ( up to 1.5m For 30Min)
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                  <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                    BODY
                  </div>
                  <div className="flex-col w-full">
                    <div className="flex w-full border-black border-b-[0.03rem] ">
                      <h3 className="w-1/3 text-sm font-bold">Diemension</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        164 x 74.6 x 8.5 mm ( 6.47 x 2.94 x 0.33 in )
                      </label>
                      <br />
                    </div>
                    <div className=" flex w-full border-black border-b-[0.03rem]">
                      <h3 className="w-1/3 text-sm font-bold">Weight</h3>
                      <label className="text-sm font-medium ml-[-1rem] lg:ml-0">
                        208g ( 7.34 oz )
                      </label>
                    </div>
                    <div className=" flex w-full border-black border-b-[0.03rem]">
                      <h3 className="w-1/3 text-sm font-bold">SIM</h3>
                      <label htmlFor="" className="text-sm font-medium">
                        Dual SIM ( Nano_ SIM, Dual Stand By ) IP68 <br />
                        Dust water Resiistant ( up to 1.5m For 30Min)
                      </label>
                    </div>
                  </div>
                </div>
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

export default Comparison;
