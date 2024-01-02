// library
import { FC } from "react";

// helpers
import { cleanClassName } from "@/app/helpers";

// components
import AnimatedEntryWrapper from "../animated-entry-wrapper/animated-entry-wrapper";

// types
type UnderlineProps = {
  type?: 'converge';
};

const Underline: FC<UnderlineProps> = ({ type = 'converge' }) => {
  return (
    <AnimatedEntryWrapper 
      className={ cleanClassName('underline', type) }
      wrapperElement={ 'div' }
      intersectionOptions={{ intersectionObserverInit: { threshold: 1.0 }}}
    >
      <div className="underline__side underline__side--left"></div>
      <div className="underline__side underline__side--right"></div>
      <div className="underline__vertical underline__vertical--left"></div>
      <div className="underline__vertical underline__vertical--right"></div>
    </AnimatedEntryWrapper>
  )
};

export default Underline;