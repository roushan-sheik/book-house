/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { getBookStorage } from "../../utils/loacla-storage";

const ListedBooks = () => {
  const [wishlist, setWishlist] = React.useState();
  const store = getBookStorage("wishlist-store");
  // fetch data
  useEffect(() => {
    let storeData = [];
    async function fetchData() {
      const res = await fetch("/books.json");
      const data = await res.json();
      data.find((book) => {
        for (const id of store) {
          if (book.id == id) {
            storeData.push(book);
          }
        }
      });
      setWishlist(storeData);
    }
    fetchData();
  }, []);
  console.log(wishlist);
  return <div>ListedBooks</div>;
};

export default ListedBooks;
