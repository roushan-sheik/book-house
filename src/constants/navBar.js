import Home from "../pages/home/Home";
import ListedBooks from "../pages/listed-books/ListedBooks";
import PageToRead from "../pages/page-to-read/PageToRead";

export const navBarData = [
  {
    path: "/",
    pathName: "Home",
    page: Home,
  },
  {
    path: "/listed-books",
    pathName: "Listed Books",
    page: ListedBooks,
  },
  {
    path: "/page-to-read",
    pathName: "Pages to Read",
    page: PageToRead,
  },
  {
    path: "/books/:id",
    pathName: "Pages to Read",
    page: PageToRead,
  },
];
