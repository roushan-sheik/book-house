/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { getBookStorage } from "../../utils/loacla-storage";

const ListedBooks = () => {
  const [books, setBooks] = React.useState([]);
  // fetch data
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/books.json");
      const data = await res.json();
      setBooks(data);
    }
    fetchData();
  }, []);
  const wishListData = getBookStorage("wishlist-store");
  console.log(books);
  console.log(wishListData);
  return <div>ListedBooks</div>;
};

export default ListedBooks;
