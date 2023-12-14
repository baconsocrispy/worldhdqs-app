// library
import { FC, ReactNode } from "react";

// components
import AnimatedEntryWrapper, { AnimatedEntryWrapperStyles } from "../animated-entry-wrapper/animated-entry-wrapper";

// types
type SectionProps = {
  children: ReactNode;
  className?: string;
  entryAnimation?: AnimatedEntryWrapperStyles;
  id?: string;
  intersectionOptions?: IntersectionObserverInit;
};

const Section: FC<SectionProps> = ({ children, className, entryAnimation, id, intersectionOptions }) => {
  return (
    <AnimatedEntryWrapper 
      className={ `section ${ className ?? '' }`}
      styleOptions={ entryAnimation }
      id={ id }
      intersectionOptions={ intersectionOptions }
      wrapperElement={ 'section' }
    >
      { children }
    </AnimatedEntryWrapper>
  )
};

export default Section;