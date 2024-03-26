/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
const BookDetails = () => {
  const { userId } = useParams();
  return (
    <div>
      <h2>{userId}</h2>
    </div>
  );
};

export default BookDetails;
