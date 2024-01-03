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
import OrbitLogo from "@/app/content/logos/whq-orbit.logo";
import OrbitingText from "../text-orbit/text-orbit.component";

type NavProps = {
  navLinks?: ListItem[];
};

const Nav: FC<NavProps>  = ({ navLinks }) => {
  // state
  const { theme } = useContext(ThemeContext);

  return (
    <header className={ cleanClassName('nav', undefined, theme?.className) }>
      <OrbitingText text='World Headquarters' />
      <NavMenu navLinks={ navLinks }/>
    </header>
  )
};

export default Nav;