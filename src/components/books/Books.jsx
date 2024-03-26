/* eslint-disable no-unused-vars */
import React from "react";
import useFetchData from "../../hooks/useFetchData";
const Books = () => {
  const { books, loading } = useFetchData();
  console.log("loading...", loading);
  console.log("Books", books);
  return <div></div>;
};

export default Books;
