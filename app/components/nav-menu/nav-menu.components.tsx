// library
import { FC, MouseEventHandler } from "react";

// components
import List from "../list/list.component";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
import { ListItem } from "@/app/types";

type NavMenuProps = {
  navLinks?: ListItem[];
  onClick?: MouseEventHandler<HTMLElement>;
  open?: boolean;
};

const NavMenu: FC<NavMenuProps> = ({ navLinks, onClick,  open = true }) => {
  return (
    <nav className="nav-menu" onClick={ onClick }>
      <List 
        className={ cleanClassName(
          'nav-menu__nav-links', 
          open ? 'open' : 'closed'
        )}
        listItems={ navLinks } 
        listItemType="nav-link"
        type={ open ? 'vertical' : 'nav' }
      />
    </nav>
  )
};

export default NavMenu;