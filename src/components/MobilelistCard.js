import React from "react";
import { FaStar, GrFormClose } from "react-icons/fa";
import { baseURL } from "api/baseURL";
import { useNavigate } from "react-router";
import { getSingleMobile } from "../redux/actions/mobileActions";
import { useDispatch } from "react-redux";
const MobilelistCard = (props) => {
  const { mobilePhotos, mobilename, price, rating, modelNumber, memory } =
    props.item;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSetSingleMobile = (value) => dispatch(getSingleMobile(value));

  const stars = Array(5).fill(0);
  return (
    <React.Fragment>
      <div
        className="bg-white flex-col w-full  rounded-md pb-5 cursor-pointer"
        onClick={() => {
          localStorage.setItem("detailId", props.item._id);
          handleSetSingleMobile(props.item);
          navigate("/phoneDescription", {
            state: props.item,
          });
        }}
      >
        <div className="flex justify-center">
          <img
            className=" object-top p-2  h-[14rem]"
            src={`${baseURL}${mobilePhotos[0]}`}
            alt={`${mobilename}`}
          />
        </div>
        <div className="flex-col w-full pl-6">
          <h3>
            {mobilename} {modelNumber}
          </h3>
          <h3 className="text-[#F4871E] font-bold text-2xl mt-2">{price}</h3>
          <p className="text-xs mt-2 font-light">
            {memory.ram.value}
            {memory.ram.unit} / {memory.rom.value}
            {memory.rom.unit}
          </p>
          <div className="flex w-full items-center">
            <div className="flex  text-[#F4871E] text-xs">
              {stars.map((_, index) => {
                return <FaStar key={index} />;
              })}
            </div>
            <h3 className="text-xs ml-3 ">{rating}</h3>{" "}
            {/*  <button className="flex ml-3 items-center rounded-[0.3rem] p-1  text-xs border border-[#9DC2FF] text-[#9DC2FF] ">
              <ImageAsset
                className="w-[1rem] h-[1rem] mr-1  "
                src="HeartIcon"
              />
              Watch
            </button> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobilelistCard;
