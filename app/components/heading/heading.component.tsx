// library
import { CSSProperties, FC, ReactNode } from "react";

// components
import Underline from "../underline/underline.component";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
type HeadingProps = {
  children: ReactNode;
  className?: string;
  position?: 'left' | 'right' | 'center';
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  style?: CSSProperties;
  underlineType?: string;
};

const Heading: FC<HeadingProps> = ({ 
  children, 
  className,
  position = 'left',
  size = 1,
  style,
  underlineType 
}) => {
  const HeadingTag = `h${ size }` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag 
      className={ cleanClassName('heading', size.toString(), className) }
      style={{ justifyContent: position, ...style }}
    >
      <div className="heading__text">
        { children }
        { underlineType &&  <Underline /> }
      </div>
    </HeadingTag>
  )
};

export default Heading;