/* eslint-disable no-unused-vars */
import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import Btn from "../../components/button/Btn";
/* eslint-disable no-unused-vars */

const AuthorDetails = () => {
  const { authorName } = useParams();
  const [authorDetails, setAuthorDetails] = React.useState([]);

  React.useEffect(() => {
    async function fetchWriters() {
      try {
        const res = await fetch("/writers.json");
        const data = await res.json();
        console.log(data);
        setAuthorDetails(data);
      } catch (error) {
        console.log("Something went wrong");
        console.log(error);
      }
    }
    fetchWriters();
  }, []);
  const author = authorDetails.filter((author) => author.name == authorName);

  const { id, name, image, country, birthday, books, description } =
    author[0] || {};
  console.log(name);
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-12 mb-20 ">
        {/* image box  */}
        <div className="flex-1 flex bg_third justify-center items-center rounded-2xl 2xl:p-[73px] lg:p-16 p-4">
          <div className="object-cover w-[425px] lg:h-[564px]  shadow-xl">
            <img className="w-full h-full" src={image} alt="Hi" />
          </div>
        </div>
        {/* content box  */}
        <div className="flex-1">
          <div>
            <h2 className="text-2xl font-bold text_pri mt-4 mb-1 ">{name}</h2>
            <h2 className="text-lg font-medium text_sec mb-1">
              Country: {country}
            </h2>
            <p className="text_third mb-4 ">Birth: {birthday}</p>
            <p className="text_third  font-bold text-base ">Books:</p>
            <div className="mb-4">
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
            <p className="text_third mb-4 ">
              <span className="text_third  font-bold text-base ">About:</span>{" "}
              {description}
            </p>
          </div>
          <div className="flex gap-6">
            <Link to={"/writers"}>
              <Btn
                label={"See all Authors"}
                style={
                  "bg_pri mt-6 text-lg text-semibold text-white capitalize text-base"
                }
              />
            </Link>
            <Link to={-1}>
              <Btn
                label={"Back"}
                style={
                  "bg_ mt-6 text-base text-semibold text_pri bg_third border-2 shadow-none capitalize "
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;
