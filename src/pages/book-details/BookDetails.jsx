/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";

const BookDetails = () => {
  const [singleData, setSingleData] = React.useState({});
  const { userId } = useParams();
  const { books, loading } = useFetchData();
  React.useEffect(() => {
    const singleData = books.find((book) => book.id == userId);
    setSingleData(singleData);
  }, [books, userId]);
  console.log(singleData);

  return <div>BookDetails</div>;
};

export default BookDetails;
