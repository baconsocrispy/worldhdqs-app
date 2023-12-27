'use client'
// library
import { ThemeContext } from "@/app/contexts/theme.context";
import { FC, ReactNode, useContext } from "react";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
type PageProps = {
  children: ReactNode;
  name?: string;
}

const Page: FC<PageProps> = ({ children, name}) => {
  // state
  const { theme } = useContext(ThemeContext);

  return (
    <main className={ cleanClassName('page', name, theme?.className) }>
      { children }
    </main>
  )
};

export default Page;