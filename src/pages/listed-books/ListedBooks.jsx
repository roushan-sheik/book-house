/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import SortingMenu from "../../components/sorting-menu/SortingMenu";
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

  return (
    <div>
      <div className="">
        <h2 className="p-8 text-center bg_third rounded-2xl lg:text-3xl text-2xl font-bold text_pri">
          Books
        </h2>
        {/* sorting button  */}
        <div className="flex justify-center mt-8">
          <SortingMenu />
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
