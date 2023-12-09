// library
import { FC, ReactNode } from "react";

// components
import NextLink from "next/link";

// types
type LinkProps = {
  className?: string;
  href?: string;
  children: ReactNode;
  type?: 'cta' | 'default' | 'nav';
};

const Link: FC<LinkProps> = ({ 
  children,
  className, 
  href,
  type = 'default'
}) => {
  return (
    <NextLink 
      className={ `link link--${ type } ${ className ?? '' }` } 
      href={ href ?? '#' }
    >
      { children }
    </NextLink>
  )
};

export default Link;