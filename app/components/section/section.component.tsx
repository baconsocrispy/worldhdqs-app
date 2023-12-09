// library
import { FC, ReactNode } from "react";

// types
type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Section: FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section 
      className={ `section ${ className ?? '' }`}
      id={ id }
    >
      { children }
    </section>
  )
};

export default Section;