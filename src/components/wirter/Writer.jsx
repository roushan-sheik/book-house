/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Btn from "../button/Btn";

const Writer = ({ writer }) => {
  const { id, name, image, country, birthday, books } = writer;
  return (
    <div className=" p-6 border-2 rounded-2xl">
      <Link to={`/book-details/author/${name}`}>
        {/* image box  */}
        <div className="h-[250px]">
          <img
            className="h-full w-full object-top object-cover"
            src={image}
            alt=""
          />
        </div>
        {/* content box  */}
        <div>
          <h2 className="text-2xl font-bold text_pri mt-4 mb-1 ">{name}</h2>
          <h2 className="text-lg font-medium text_sec mb-1">
            Country: {country}
          </h2>
          <p className="text_third mb-4 ">Birth: {birthday}</p>
          <p className="text_third  font-bold text-base ">Books:</p>
          <div>
            {books?.map((book) => {
              return (
                <div
                  className="text_third flex gap-2 items-center"
                  key={(id, book)}
                >
                  <IoBookOutline />
                  <p>{book}</p>
                </div>
              );
            })}
          </div>
          {/* button  */}
          <Btn
            label={"View details"}
            style={"bg_third border-2 shadow-none mt-4 capitalize "}
          />
        </div>
      </Link>
    </div>
  );
};
Writer.propTypes = {
  writer: PropTypes.object,
};

export default Writer;
