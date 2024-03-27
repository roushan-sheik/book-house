import { toast } from "react-toastify";
import { getBookStorage, setBookStorage } from "../loacla-storage";

export function wishlistStore(storeName, id) {
  // get readLoacle strage
  const readStore = getBookStorage(storeName);
  // console.log(readStore);
  // check if exist
  const exists = readStore.find((bookId) => bookId == id);
  // return error msg
  if (exists) {
    toast.warning("You have already added to the wishlist.", {
      position: "top-right",
    });
    return;
  }
  // set id to the locale storage
  setBookStorage(storeName, id);
  // show the toast success message
  toast.info("Added to the wishlist", {
    position: "top-right",
  });
}
