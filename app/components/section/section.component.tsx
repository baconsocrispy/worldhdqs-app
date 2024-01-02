// library
import { FC, ReactNode } from "react";

// components
import AnimatedEntryWrapper from "../animated-entry-wrapper/animated-entry-wrapper";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
import { IntersectionObserverOptions } from "@/app/types";


type SectionProps = {
  children: ReactNode;
  id?: string;
  intersectionObserverOptions?: IntersectionObserverOptions;
};

const Section: FC<SectionProps> = ({ 
  children, 
  id, 
  intersectionObserverOptions 
}) => {
  return (
    <AnimatedEntryWrapper 
      className={ cleanClassName(
        'section', 
        undefined,
        intersectionObserverOptions?.transitionClass
      )}
      id={ id }
      intersectionOptions={ intersectionObserverOptions }
      wrapperElement={ 'section' }
    >
      { children }
    </AnimatedEntryWrapper>
  )
};

export default Section;