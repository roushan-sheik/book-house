import { toast } from "react-toastify";
import { getBookStorage, setBookStorage } from "../loacla-storage";

export function readStore(storeName, id) {
  // get readLoacle strage
  const readStore = getBookStorage(storeName);
  // console.log(readStore);
  // check if exist
  const exists = readStore.find((bookId) => bookId == id);
  // return error msg
  if (exists) {
    toast.warning("You have read this book!", {
      position: "top-right",
    });
    return;
  }
  // set id to the locale storage
  setBookStorage("read-store", id);
  // show the toast success message
  toast.success("Read", {
    position: "top-center",
  });
}
