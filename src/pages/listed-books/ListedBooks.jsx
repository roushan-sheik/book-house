/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListBook from "../../components/list-book/ListBook";
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
        {/* listed books  */}
        <div className="mt-12">
          <Tabs>
            <TabList>
              <Tab>
                <button>Read Books</button>
              </Tab>
              <Tab>
                <button>Wishlist Books</button>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="flex flex-col gap-6">Read books</div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col gap-6">
                {wishlist &&
                  wishlist.map((book) => (
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
