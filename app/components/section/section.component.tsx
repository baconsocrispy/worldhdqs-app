// library
import { FC, ReactNode } from "react";

// components
import AnimatedEntryWrapper from "../animated-entry-wrapper/animated-entry-wrapper";

// types
import { AnimationOptions } from "@/app/types";

type SectionProps = {
  animationOptions?: AnimationOptions;
  children: ReactNode;
  className?: string;
  id?: string;
  intersectionOptions?: IntersectionObserverInit;
};

const Section: FC<SectionProps> = ({ 
  animationOptions,
  children, 
  className,  
  id, 
  intersectionOptions 
}) => {
  return (
    <AnimatedEntryWrapper 
      className={ `section ${ className ?? '' }`}
      animationOptions={ animationOptions }
      id={ id }
      intersectionOptions={ intersectionOptions }
      wrapperElement={ 'section' }
    >
      { children }
    </AnimatedEntryWrapper>
  )
};

export default Section;