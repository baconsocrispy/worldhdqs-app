// library
import { ReactNode } from "react";

// components
import Nav from "../nav/nav.component";

const Grid = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid">
      <Nav />
      { children }
    </div>
  )
};

export default Grid;