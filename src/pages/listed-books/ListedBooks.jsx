/* eslint-disable no-unused-vars */
import { Spinner } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListBook from "../../components/list-book/ListBook";
import SortingMenu from "../../components/sorting-menu/SortingMenu";
import { getBookStorage } from "../../utils/loacla-storage";

const ListedBooks = () => {
  const [sortedWish, setSortedWish] = React.useState([]);
  const [sortedRead, setSortedRead] = React.useState([]);
  const [wishlist, setWishlist] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [read, setRead] = React.useState();
  const wishlistStore = getBookStorage("wishlist-store");
  const readStore = getBookStorage("read-store");
  // fetch data
  useEffect(() => {
    let storeData = [];
    let readData = [];
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("/books.json");
        const data = await res.json();
        data.find((book) => {
          for (const id of wishlistStore) {
            if (book.id == id) {
              storeData.push(book);
            }
          }
          for (const id of readStore) {
            if (book.id == id) {
              readData.push(book);
            }
          }
        });
        setWishlist(storeData);
        setRead(readData);
        setSortedRead(readData);
        setSortedWish(storeData);
        setLoading(false);
      } catch (error) {
        console.log("Something went wrong.");
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // sort: all , rating, pages, publish
  function handleSort(clickType) {
    if (clickType == "rating") {
      setSortedRead([...read.sort((a, b) => b.rating - a.rating)]);
      setSortedWish([...wishlist.sort((a, b) => b.rating - a.rating)]);
    } else if (clickType == "pages") {
      setSortedRead([...read.sort((a, b) => b.page - a.page)]);
      setSortedWish([...wishlist.sort((a, b) => b.page - a.page)]);
    } else if (clickType == "publish") {
      setSortedRead([...read.sort((a, b) => b.publishYear - a.publishYear)]);
      setSortedWish([
        ...wishlist.sort((a, b) => b.publishYear - a.publishYear),
      ]);
    }
  }

  return (
    <div>
      <div className="">
        <h2 className="p-8 text-center bg_third rounded-2xl lg:text-3xl text-2xl font-bold text_pri">
          Books
        </h2>
        {/* spinner  */}
        <div className="flex justify-center items-center">
          {loading && <Spinner className="h-12 w-12" />}
        </div>
        {/* sorting button  */}
        <div className="flex justify-center mt-8">
          <SortingMenu handleSort={handleSort} />
        </div>
        {/* listed books  */}
        <div className="mt-12">
          <Tabs>
            <TabList>
              <Tab>
                <button className="text-lg">Read Books</button>
              </Tab>
              <Tab>
                <button className="text-lg">Wishlist Books</button>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="flex flex-col gap-6 pt-6">
                {sortedRead &&
                  sortedRead.map((book) => (
                    <ListBook book={book} key={book.id} />
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col gap-6 pt-6">
                {sortedWish &&
                  sortedWish.map((book) => (
                    <ListBook book={book} key={book.id} />
                  ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
