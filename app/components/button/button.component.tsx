// library
import { FC } from "react";

// types
type ButtonProps = {
  className?: string;
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button: FC<ButtonProps> = ({
  className,
  text,
  type = 'button'
}) => {
  return (
    <button 
      className={ `button button__${ type } ${ className ?? '' }`}
      type={ type }
    >
      { text }
    </button>
  )
};

export default Button;