import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Button, Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import React from "react";

const SortingMenu = () => {
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
      <MenuList className="hidden w-[150px] grid-cols-7 lg:grid">
        <div className="  flex text-lg  flex-col gap-1">
          <button>Rating</button>
          <button>Pages</button>
          <button>Publish Year</button>
        </div>
      </MenuList>
    </Menu>
  );
};

export default SortingMenu;
