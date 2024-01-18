'use client'
// library
import { FC, MouseEventHandler, useContext, useState } from "react";

// components
import NavMenu from "../nav-menu/nav-menu.components";

// context
import { ThemeContext } from "@/app/contexts/theme.context";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
import { ListItem } from "@/app/types";
import OrbitingText from "../text-orbit/text-orbit.component";
import Hamburger from "../hamburger/hamburger.component";

type NavProps = {
  navLinks?: ListItem[];
};

const Nav: FC<NavProps>  = ({ navLinks }) => {
  // state
  const { theme } = useContext(ThemeContext);
  const [ menuOpen, setMenuOpen ] = useState(false);

  // handlers
  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className={ cleanClassName(
      'nav', 
      menuOpen ? undefined : 'blend', 
      theme?.className
    )}>
      <OrbitingText 
        text='World Headquarters' 
      >
        <div 
          className="orbiting-text__child"
          style={ menuOpen ? { backgroundColor: 'black' } : undefined }
        />
      </OrbitingText>

      <Hamburger 
        className={ menuOpen ? 'hamburger--open' : undefined }
        onClick={ handleClick }
        shape="star" 
      />
      <NavMenu 
        navLinks={ navLinks } 
        onClick={ handleCloseMenu } 
        open={ menuOpen } 
      />
    </header>
  )
};

export default Nav;