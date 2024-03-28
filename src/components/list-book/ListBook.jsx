/* eslint-disable no-unused-vars */
import { object } from "prop-types";
import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import Btn from "../button/Btn";

const ListBook = ({ book }) => {
  const {
    id,
    title,
    image,
    author,
    review,
    tags,
    category,
    page,
    publisher,
    publishYear,
    rating,
  } = book || {};

  return (
    <div className="flex gap-6 p-6 flex-col lg:flex-row border-2 rounded-2xl">
      {/* image box  */}
      <div className="flex justify-center items-center rounded-xl bg_third lg:h-[228px] h-[200px] lg:w-[230px] w-full  ">
        <div className="lg:w-[150px] w-[130px] lg:h-[170px] h-[160px] ">
          <img className="w-full h-full " src={image} alt="" />
        </div>
      </div>
      {/* content box  */}
      <div>
        <h2 className="text-2xl text-pri font-bold mb-4">{title}</h2>
        <p className="text-base font-medium text_sec mb-4"> By: {author}</p>
        {/* tags and loacation  */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="flex gap-3">
            <h2 className="text_pri font-bold text-base mr-4">Tag:</h2>
            {tags &&
              tags.map((tag, i) => {
                return (
                  <p
                    className="text-base font-medium text_brand"
                    key={(i, tag)}
                  >
                    #{tag}
                  </p>
                );
              })}
          </div>
          <div className="flex gap-2 text-base items-center text_sec">
            <MdDateRange />
            <p>Year of Publishing: </p>
            <p>{publishYear && publishYear}</p>
          </div>
        </div>
        {/* publisher and pages  */}
        <div className="flex flex-col lg:flex-row gap-4 mt-4 border-b-2 pb-4">
          <div className="flex items-center gap-1 text_third text-base">
            <HiOutlineUsers />
            <p>Publisher: {author}</p>
          </div>
          <div className="flex items-center gap-1 text_third text-base">
            <FaRegFileLines />
            <p>Pages: {page}</p>
          </div>
        </div>
        {/* button box  */}
        <div className="mt-4 flex flex-col lg:flex-row  gap-3">
          <Btn
            label={`Category: ${category}`}
            style={
              "bg-[#328eff26] rounded-3xl py-3 text-base capitalize shadow-none text-[#328eff]"
            }
          />
          <Btn
            label={`Rating: ${rating}`}
            style={
              "bg-[#ffac3326] rounded-3xl py-3 text-base capitalize shadow-none text-[#ffac33]"
            }
          />
          <div className="flex lg:justify-center justify-center">
            <Link to={`/book-details/${id}`}>
              <Btn
                label={`View Details`}
                style={
                  "bg_pri rounded-3xl py-3 text-base capitalize shadow-none text-[#fff]"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
ListBook.propTypes = {
  book: object,
};
export default ListBook;
