// library
import { cleanClassName } from "@/app/helpers";
import { FC, MouseEventHandler } from "react";

// types
type HamburgerProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  shape?: 'star';
};

const Hamburger: FC<HamburgerProps> = ({ className, onClick, shape }) => {
  return (
    <div 
      className={ cleanClassName(
        'hamburger',
        shape,
        className
      )}
      onClick={ onClick }
    >
      <div className="hamburger__lines">
        <div className="hamburger__line" />
      </div>
    </div>
  )
}

export default Hamburger