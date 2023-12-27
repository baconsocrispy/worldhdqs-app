'use client'
// library
import { FC, useContext } from "react";

// components
import Logo from "../logo/logo.component";
import NavMenu from "../nav-menu/nav-menu.components";

// context
import { ThemeContext } from "@/app/contexts/theme.context";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
import { ListItem } from "@/app/types";

type NavProps = {
  navLinks?: ListItem[];
};

const Nav: FC<NavProps>  = ({ navLinks }) => {
  // state
  const { theme } = useContext(ThemeContext);

  return (
    <header className={ cleanClassName('nav', undefined, theme?.className) }>
      <Logo />
      <NavMenu navLinks={ navLinks }/>
    </header>
  )
};

export default Nav;