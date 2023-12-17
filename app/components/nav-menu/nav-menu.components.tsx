// library
import { FC } from "react";

// components
import List from "../list/list.component";

// types
import { ListItem } from "@/app/types";

type NavMenuProps = {
  navLinks?: ListItem[];
};

const NavMenu: FC<NavMenuProps> = ({ navLinks }) => {
  return (
    <nav className="nav-menu">
      <List 
        type='nav' 
        listItems={ navLinks } 
      />
    </nav>
  )
};

export default NavMenu;