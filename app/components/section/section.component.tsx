// library
import { FC, ReactNode } from "react";

// components
import IntersectionObserverWrapper from "../intersection-observer-wrapper/intersection-observer-wrapper.component";

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
    <IntersectionObserverWrapper 
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
    </IntersectionObserverWrapper>
  )
};

export default Section;