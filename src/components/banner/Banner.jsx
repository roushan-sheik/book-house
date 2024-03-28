/* eslint-disable no-unused-vars */
import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { bannerData } from "../../constants/bannerData";
import Btn from "./../button/Btn";
const Banner = () => {
  const { title, btn, image } = bannerData;
  return (
    <div className="flex h-[80vh] flex-col  xl:px-40 lg:px-36 px-8 py-8 lg:py-16 2xl:py-20 lg:flex-row gap-8 bg_third rounded-3xl">
      {/* content box  */}
      <div className="flex-1 flex justify-center items-center lg:items-start flex-col xl:gap-12 lg:gap-10 gap-8 ">
        <Typography
          className="font-bold text_pri 2xl:text-6xl lg:text-5xl  text-3xl"
          as={"h2"}
        >
          {title}
        </Typography>
        <Link to={"/listed-books"}>
          <Btn
            label={btn}
            style={
              "bg_pri lg:py-4 py-2 capitalize text-white w-[190px] 2xl:text-5 lg:text-4 text-base  "
            }
          />
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className=" 2xl:w-[400px] lg:w-[300px] w-[300px] 2xl:h-[400px] h-[300px] object-cover">
          <img
            className="2xl:w-[400px] lg:w-[400px] w-[300px] 2xl:h-[300px] h-[300px]"
            src={image}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
