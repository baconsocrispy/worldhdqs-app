// library
import { FC, ReactNode } from "react";

// components
import NextLink from "next/link";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
type LinkProps = {
  className?: string;
  href?: string;
  children: ReactNode;
  newTab?: boolean;
  type?: 'cta' | 'default' | 'nav';
};

const Link: FC<LinkProps> = ({ 
  children,
  className, 
  href,
  newTab,
  type = 'default'
}) => {
  return (
    <NextLink 
      className={ cleanClassName('link', type, className) } 
      href={ href ?? '#' }
      target={ newTab ? '_blank' : undefined }
    >
      { children }
    </NextLink>
  )
};

export default Link;