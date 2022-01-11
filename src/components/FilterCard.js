import React from "react";

const FilterCard = (props) => {
  const { children, title, heading } = props;
  return (
    <div>
      <div className="right text-white rounded-2xl pt-3 bg-backgroundGreenColor search card mt-5 text-center">
        <h1>Search by {title}</h1>
        <div className="w-full text-left pl-2 mt-3">
          <h1>{heading}</h1>
        </div>

        <div className="w-full text-white text-sm text-left space-y-3 mt-3 pb-5 pl-2 flex flex-col">
          {children}
          <div className="w-full text-center text-xs text-white ">
            <button className="bg-buttonBgColor bg-gradient-to-b p-3 pl-4 pr-4 rounded-md from-buttonBgColorGradian1 to-buttonBgcolorGradian2">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
