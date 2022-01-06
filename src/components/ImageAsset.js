import React from "react";
import { icons } from "../assets";

const ImageAsset = (props) => {
  const { src, className, onClick, style } = props;
  return (
    <img
      alt="icon"
      src={icons[src]}
      className={`${className}`}
      onClick={onClick}
      style={style}
    />
  );
};

export default ImageAsset;
