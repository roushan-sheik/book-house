import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Button, Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";

const SortingMenu = ({ handleSort }) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center hover:bg-blue-300 gap-3 bg_pri text-lg font-semibold text-white capitalize tracking-normal"
        >
          Sort By
          <ChevronDownIcon
            strokeWidth={2.7}
            className={`h-3.5 w-3.5 transition-transform font-semibold ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className=" w-[300px] z-50   lg:grid">
        <div className="  flex text-lg flex-start flex-col gap-2">
          {/* <button
            onClick={() => handleSort("all")}
            className="hover:text-black hover:font-bold"
          >
            All
          </button> */}
          <button
            onClick={() => handleSort("rating")}
            className="hover:text-black hover:font-bold"
          >
            Rating
          </button>
          <button
            onClick={() => handleSort("pages")}
            className="hover:text-black hover:font-bold"
          >
            Number of Pages
          </button>
          <button
            onClick={() => handleSort("publish")}
            className="hover:text-black hover:font-bold"
          >
            Publish Year
          </button>
        </div>
      </MenuList>
    </Menu>
  );
};
SortingMenu.propTypes = {
  handleSort: PropTypes.func,
};
export default SortingMenu;
