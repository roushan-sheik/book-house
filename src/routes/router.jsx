import { createBrowserRouter } from "react-router-dom";
import { navBarData } from "../constants/navBar";
import Root from "../layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: navBarData.map((nav) => {
      return {
        path: nav.path,
        element: <nav.page />,
      };
    }),
  },
]);
