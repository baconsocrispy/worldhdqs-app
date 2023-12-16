// library
import { FC, ReactNode } from "react";

// components
import Underline from "../underline/underline.component";

// types
type HeadingProps = {
  children: ReactNode;
  className?: string;
  position?: 'left' | 'right' | 'center';
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  underlineType?: string;
};

const Heading: FC<HeadingProps> = ({ 
  children, 
  className,
  position = 'left',
  size = 1, 
  underlineType 
}) => {
  const HeadingTag = `h${ size }` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag 
      className={ `heading heading--${ size } ${ className ?? '' }` }
      style={{ justifyContent: position }}
    >
      <div className="heading__text">
        { children }
        { underlineType &&  <Underline /> }
      </div>
    </HeadingTag>
  )
};

export default Heading;