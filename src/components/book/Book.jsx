/* eslint-disable no-unused-vars */
import { Rating, Typography } from "@material-tailwind/react";
import { object } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { id, title, image, tags, author, rating } = book;
  return (
    <Link to={`/book-details/${id}`}>
      <div className=" border-2 p-6 rounded-2xl">
        {/* image box  */}

        <div className="bg_third mb-6 cursor-pointer rounded-2xl flex justify-center items-center h-[230px] ">
          <div className="object-cover w-[160px] h-[200px] ">
            <img className=" h-full w-full" src={image} alt="" />
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          {tags.map((tag) => (
            <Typography
              className="text_brand text-base font-[500]"
              key={tag}
              as={"p"}
            >
              {tag}
            </Typography>
          ))}
        </div>
        <Typography as={"h3"} className="text_pri font-bold text-2xl mb-4">
          {title}
        </Typography>
        <Typography className="text-base font-[500] text_sec mb-10" as={"h4"}>
          By: {author}
        </Typography>
        {/* fiction and rating  */}
        <div className="flex justify-between text-base text_sec font-[500]">
          <Typography as={"p"}>Fiction</Typography>
          <div className="flex gap-2">
            <Typography as={"p"}>{rating}</Typography>
            <Rating value={4} />
          </div>
        </div>
      </div>
    </Link>
  );
};
Book.propTypes = {
  book: object,
};

export default Book;
