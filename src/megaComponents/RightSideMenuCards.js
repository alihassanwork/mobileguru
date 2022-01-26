import React from "react";
import { FilterCard } from "components";

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

const RightSideMenu = () => {
  return (
    <>
      {rightMenu.map(({ title, heading, description }) => {
        return (
          <FilterCard title={title} heading={heading}>
            {description.map((item) => {
              return <h1>{item}</h1>;
            })}
          </FilterCard>
        );
      })}
    </>
  );
};

export default RightSideMenu;
