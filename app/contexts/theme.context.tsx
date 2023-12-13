'use client'
// library
import { createContext, ReactNode, useState } from "react";


// types
import { Theme } from "../types";

type ThemeContextProps = {
  resetTheme: Function;
  setTheme: Function;
  theme: Theme | undefined;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextProps>({
  resetTheme: () => {},
  setTheme: () => {},
  theme: {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // state
  const [ theme, setTheme ] = useState<Theme | undefined>(undefined);

  // actions
  const resetTheme = () => setTheme(undefined);

  const value = {
    resetTheme,
    theme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={ value }>
    { children }
    </ThemeContext.Provider>
  )
};