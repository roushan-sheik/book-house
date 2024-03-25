import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import ListedBooks from "../pages/listed-books/ListedBooks";
import PageToRead from "../pages/page-to-read/PageToRead";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/page-to-read",
        element: <PageToRead />,
      },
    ],
  },
]);
