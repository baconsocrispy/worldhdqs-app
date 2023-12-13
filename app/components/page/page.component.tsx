'use client'
// library
import { ThemeContext } from "@/app/contexts/theme.context";
import { FC, ReactNode, useContext } from "react";

// types
type PageProps = {
  children: ReactNode;
  name?: string;
}

const Page: FC<PageProps> = ({ children, name}) => {
  // state
  const { theme } = useContext(ThemeContext);

  return (
    <main className={ `page ${ name ? 'page--' + name : ''} ${ theme?.className }`}>
      { children }
    </main>
  )
};

export default Page;