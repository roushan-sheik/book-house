/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React from "react";

const SingleLibrary = ({ library }) => {
  const { id, name, image, established, location, country, about_library } =
    library;
  return (
    <div className="p-4 border-2 rounded-lg">
      {/* image box  */}
      <div className="h-[300px]">
        <img className="object-cover w-full h-full" src={image} alt="" />
      </div>
      {/* content box  */}
      <div>
        <h3 className="lg:text-2xl text-xl font-semibold text_pri mt-4 mb-1 ">
          {name}
        </h3>
        <p className="text_sec font-medium text-lg mb-2">{country}</p>
        <p className="text_sec text_third   text-base">{location}</p>
        <p className="text_sec   text_third text-base mb-2">
          <span className="font-semibold">Established:</span> {established}
        </p>
        <p className="text_sec  text_third text-base">
          <span className="font-semibold">Description:</span> {about_library}
        </p>
      </div>
    </div>
  );
};
SingleLibrary.propTypes = {
  library: PropTypes.object,
};
export default SingleLibrary;
