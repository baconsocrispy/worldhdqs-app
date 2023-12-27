// library
import { FC } from "react";

// helpers
import { cleanClassName } from "@/app/helpers";

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
      className={ cleanClassName('button', type, className) }
      type={ type }
    >
      { text }
    </button>
  )
};

export default Button;