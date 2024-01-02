// library
import { FC } from "react";

// helpers
import { cleanClassName } from "@/app/helpers";

// components
import IntersectionObserverWrapper from "../intersection-observer-wrapper/intersection-observer-wrapper.component";

// types
type UnderlineProps = {
  type?: 'converge';
};

const Underline: FC<UnderlineProps> = ({ type = 'converge' }) => {
  return (
    <IntersectionObserverWrapper 
      className={ cleanClassName('underline', type) }
      wrapperElement={ 'div' }
      intersectionOptions={{ intersectionObserverInit: { threshold: 1.0 }}}
    >
      <div className="underline__side underline__side--left"></div>
      <div className="underline__side underline__side--right"></div>
      <div className="underline__vertical underline__vertical--left"></div>
      <div className="underline__vertical underline__vertical--right"></div>
    </IntersectionObserverWrapper>
  )
};

export default Underline;