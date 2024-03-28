/* eslint-disable no-unused-vars */
import { Rating, Typography } from "@material-tailwind/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Btn from "../../components/button/Btn";
import { getBookStorage } from "../../utils/loacla-storage";
import { readStore } from "../../utils/read-store/readStore";
import { wishlistStore } from "../../utils/wishlist-store/wishlistStore";

const BookDetails = () => {
  const [allBooks, setAllBooks] = React.useState([]);

  const { userId } = useParams();
  //   const { books, loading } = useFetchData();
  React.useEffect(() => {
    async function fetcheData() {
      const res = await fetch("/books.json");
      const data = await res.json();
      setAllBooks(data);
    }
    fetcheData();
  }, []);
  const findData = allBooks.find((book) => book.id == userId);

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
  } = findData || {};
  // handleWishlistClick handleReadClick
  function handleReadClick() {
    readStore("read-store", id);
  }
  function handleWishlistClick() {
    // check already read or not
    const read_storage = getBookStorage("read-store");
    const exists = read_storage.find((bookId) => bookId == id);

    if (exists) {
      toast.error("Read book couldn't add to the wishlist.", {
        position: "top-right",
      });
      return;
    } else {
      // add to the wishlist
      wishlistStore("wishlist-store", id);
    }
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-12 mb-20 ">
        {/* image box  */}
        <div className="flex-1 flex bg_third justify-center items-center rounded-2xl 2xl:p-[73px] lg:p-16 p-4">
          <div className="object-cover w-[425px] lg:h-[564px]  shadow-xl">
            <img className="w-full h-full" src={image} alt="" />
          </div>
        </div>
        {/* Toast messsage container  */}
        <ToastContainer />
        {/* details box  */}
        <div className="">
          <h2 className="text-center lg:text-start text-3xl lg:text-4xl 2xl:text-[40px] mb-5 font-bold">
            {title}
          </h2>
          <p className="text-center lg:text-start text-xl font-medium text-lx text_sec mb-5">
            By: {author}{" "}
          </p>
          <div className="text-center lg:text-start text-xl font-medium border-y-2 py-3">
            Fiction
          </div>
          <p className="text-justify lg:text-start text_third text-base mt-5">
            <span className=" font-bold text_pri">Review:</span> {review}
          </p>
          <div className="flex gap-3 lg:mt-10 mt-6 border-b-2 pb-5">
            <p className="font-bold text_pri">Tag</p>
            {tags &&
              tags.map((tag, ind) => {
                return (
                  <p
                    className="text_brand font-medium text-base"
                    key={(tag, ind)}
                  >
                    #{tag}
                  </p>
                );
              })}
          </div>
          {/* info details  */}
          <div className="flex text-base mt-6 mb-3">
            <Typography className="flex-1 text_third" as={"p"}>
              Number of Pages:
            </Typography>
            <p className="flex-1 text_pri font-semibold">{page && page}</p>
          </div>
          <div className="flex text-base mb-3">
            <Typography className="flex-1 text_third" as={"p"}>
              Publisher:
            </Typography>
            <p className="flex-1 text_pri font-semibold">{publisher}</p>
          </div>
          <div className="flex text-base mb-3">
            <Typography className="flex-1 text_third" as={"p"}>
              Year of Publishing:
            </Typography>
            <p className="flex-1 text_pri font-semibold">{publishYear}</p>
          </div>
          <div className="flex text-base mb-3">
            <p className="flex-1 text_third">Rating:</p>
            <div className="flex-1 flex gap-2 items-center text_pri font-semibold text-base">
              <Typography
                className="
               font-semibold"
                as={"span"}
              >
                {" "}
                {rating}
              </Typography>
              <Typography className="text-sm mt-1" as={"span"}>
                <Rating value={4} />
              </Typography>
            </div>
          </div>
          {/* button box  */}
          <div className="mt-8 flex gap-4 justify-center lg:justify-start">
            <Btn
              onClick={handleReadClick}
              label={"Read"}
              style={
                "bg-transparent border-2 border-[#1313134d] capitalize text-lg font-semibold"
              }
            />
            <Btn
              onClick={handleWishlistClick}
              label={"Wishlist"}
              style={"bg_sec capitalize text-white text-lg font-semibold"}
            />
            <Link to={`/book-details/author/${author}`}>
              <Btn
                label={"See Author Details"}
                style={"bg_pri  capitalize text-white text-lg font-semibold"}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
