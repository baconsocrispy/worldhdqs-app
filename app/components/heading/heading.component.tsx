// library
import { FC, ReactNode } from "react";

// types
type HeadingProps = {
  children: ReactNode;
  className?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading: FC<HeadingProps> = ({ children, className, size = 1 }) => {
  const HeadingTag = `h${ size }` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={ `heading heading--${ size } ${ className ?? '' }` }>
      { children }
    </HeadingTag>
  )
};

export default Heading;