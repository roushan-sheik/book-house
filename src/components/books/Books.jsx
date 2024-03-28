/* eslint-disable no-unused-vars */
import { Spinner, Typography } from "@material-tailwind/react";
import React from "react";
import useFetchData from "../../hooks/useFetchData";
import Book from "../book/Book";
const Books = () => {
  const { books, loading } = useFetchData();

  return (
    <div className="mt-[100px]">
      <Typography
        as={"h2"}
        className="text-3xl lg:text-4xl 2xl:text-5xl text-center mb-10 font-bold text_pri"
      >
        Books
      </Typography>
      {/* spinner  */}
      <div className="flex justify-center items-center">
        {loading && <Spinner className="h-12 w-12" />}
      </div>
      {/* books parent  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {books.map((book) => {
          return <Book key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Books;
