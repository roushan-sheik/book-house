/* eslint-disable no-unused-vars */
import { Typography } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { navBarData } from "../../constants/nav";

const NavList = () => {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navBarData.map((nav) => {
        return (
          <Typography
            key={nav.pathName}
            as="li"
            variant="small"
            className="p-1 lg:text-lg text-medium  text_sec"
          >
            <NavLink
              to={nav.path}
              className={({ isActive, isPending }) =>
                isActive
                  ? "font-semibold text_brand"
                  : isPending
                  ? "pending"
                  : "flex items-center"
              }
            >
              {nav.pathName}
            </NavLink>
          </Typography>
        );
      })}
    </ul>
  );
};

export default NavList;