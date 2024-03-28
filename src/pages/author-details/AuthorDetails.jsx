/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";

const AuthorDetails = () => {
  const { authorName } = useParams();
  const [authorDetails, setAuthorDetails] = React.useState([]);
  React.useEffect(() => {
    async function fetchWriters() {
      const res = await fetch("/writers.json");
      const data = await res.json();
      setAuthorDetails(data);
    }
    fetchWriters();
  }, []);
  const author = authorDetails.filter((author) => author.name == authorName);
  const { id, name, image, country, birthday, books } = author[0];

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default AuthorDetails;
