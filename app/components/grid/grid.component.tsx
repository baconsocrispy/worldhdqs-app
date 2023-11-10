// library
import { ReactNode } from "react"

const Grid = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid">
      { children }
    </div>
  )
};

export default Grid;