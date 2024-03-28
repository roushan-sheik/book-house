import AuthorDetails from "../pages/author-details/AuthorDetails";
import BookDetails from "../pages/book-details/BookDetails";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Library from "../pages/library/Library";
import ListedBooks from "../pages/listed-books/ListedBooks";
import PageToRead from "../pages/page-to-read/PageToRead";
import Writers from "../pages/writers/Writers";

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
    path: "/writers",
    pathName: "Writers",
    page: Writers,
  },
  {
    path: "/library",
    pathName: "Library",
    page: Library,
  },
  {
    path: "/page-to-read",
    pathName: "Pages to Read",
    page: PageToRead,
  },

  {
    path: "/book-details/:userId",
    page: BookDetails,
  },
  {
    path: "/book-details/author/:authorName",
    page: AuthorDetails,
  },
  {
    path: "*",
    page: ErrorPage,
  },
];
