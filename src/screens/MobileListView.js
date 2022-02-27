import React, { useEffect, useState } from "react";
import { Footer, MobilelistCard, Navbar, MobileBrandsNames } from "components";
import { FaBackward, FaForward } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router";
import { RightSideMenu, LeftSideMenu } from "megaComponents";
import { getMobiles, getMobilesByPrice } from "../redux/actions/mobileActions";
import { useDispatch, useSelector } from "react-redux";

const MobileListView = () => {
  let navigate = useNavigate();
  const [pageNo, setPageNumber] = useState(1);
  //redux
  const dispatch = useDispatch();
  const { allMobiles, moreMobile, isFilter } = useSelector(
    (state) => state.mobileReducer
  );

  const handleFetchMobiles = (page) => dispatch(getMobiles(page));
  const handleFetchMobilesByPrice = (values, page) =>
    dispatch(getMobilesByPrice(values, page));

  const { state } = useLocation();
  const [filterCheck, setFilterCheck] = useState();

  //useCallBack
  const changeFilter = React.useCallback(() => {
    setFilterCheck(state);
  }, [state]);
  const reduxState = (isFilter) => isFilter;

  //useMemo
  const memoizedValue = React.useMemo(() => reduxState(isFilter), [isFilter]);
  //useEffect
  useEffect(() => {
    changeFilter(state);
    if (memoizedValue === true) {
      if (state.title === "Price") {
        handleFetchMobilesByPrice(state.item, pageNo);
      }
    } else {
      handleFetchMobiles(pageNo);
    }
  }, [pageNo, memoizedValue, filterCheck, changeFilter]);
  return (
    <React.Fragment>
      <Navbar />
      <div className="mainContent mt-20 flex flex-col lg:flex-row lg:px-5">
        <div className="lg:w-[20%] order-2 px-5 lg:px-0">
          <MobileBrandsNames />

          <LeftSideMenu />
        </div>
        {/* cards  */}
        <div className="lg:w-[60%] h-full  pb-0 lg:pb-[20rem]  flex flex-col mt-[-2rem] lg:mt-0 lg:ml-4 lg:mr-4   order-1 lg:order-2  ">
          <div className="flex mb-5 text-md pl-5 pr-5 lg:pl-0 lg:pr-0 font-semibold mt-8">
            <h3 className="mr-auto ">Used Mobile </h3>
            <h3
              className="ml-auto cursor-pointer"
              onClick={() => {
                navigate("/UploadAd");
              }}
            >
              Sell Your Mobile
            </h3>
          </div>
          <div className="lg:pl-4 lg:pr-4 rounded-md bg-center bg-[#D2DCE7] ">
            <div className="flex-1  p-4 pl-1 pr-1 ">
              <div className="grid sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-2 gap-y-6">
                {allMobiles.map((item) => {
                  return <MobilelistCard item={item} key={item._id} />;
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between my-4">
            <div>
              <div
                onClick={() => setPageNumber((prev) => prev - 1)}
                className={`cursor-pointer flex items-center justify-start gap-3 py-2 rounded-xl px-4 border-2 bg-green-700 text-white ${
                  pageNo == 1 ? "hidden" : ""
                }`}
              >
                <FaBackward />
                <h2>Previous</h2>
              </div>
            </div>
            <div
              onClick={() => setPageNumber((prev) => prev + 1)}
              className={`cursor-pointer flex items-center justify-start gap-3 py-2 rounded-xl px-4 border-2 bg-green-700 text-white ${
                moreMobile ? "" : "hidden"
              }`}
            >
              <h2>Next</h2>
              <FaForward />
            </div>
          </div>
        </div>
        <div className="lg:w-[20%] px-5 lg:px-0  text-center order-3 lg:order-3">
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

          <RightSideMenu />
        </div>
      </div>
      <div className="mt-[10rem]">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default MobileListView;
