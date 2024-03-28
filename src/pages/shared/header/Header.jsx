import { Collapse, IconButton, Navbar } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Btn from "../../../components/button/Btn";
import NavList from "../../../components/navList/NavList";
function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <nav className="lg:py-6 py-4">
      <Navbar className="sticky top-0 shadow-none z-10 px-0 h-max max-w-full rounded-none  py-2 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <h3 className="text-medium lg:text-[28px] font-bold">
            <NavLink
              to={"/"}
              href="#"
              className="mr-4 text-nowrap  cursor-pointer py-1.5  "
            >
              Book House
            </NavLink>
          </h3>
          {/* Nav list  */}
          <div className="mr-4 hidden lg:block">{<NavList />}</div>
          {/* button  box*/}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-4">
              <Btn
                style={
                  "bg_pri text-white font-semibold capitalize text-lg hidden lg:flex "
                }
                label={"Sign In"}
              />
              <Btn
                style={
                  "bg_sec text-white font-semibold capitalize text-lg hidden lg:flex "
                }
                label={"Sign Up"}
              />
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {<NavList />}
          <div className="flex items-center  gap-x-1">
            <Btn
              label={"Sign In"}
              size="sm"
              style={"w-full bg_pri text-white text-nowrap  capitalize"}
            />
            <Btn
              label={"Sign Up"}
              size="sm"
              style={"w-full bg_sec text-white text-nowrap  capitalize"}
            />
          </div>
        </Collapse>
      </Navbar>
    </nav>
  );
}
export default Header;
