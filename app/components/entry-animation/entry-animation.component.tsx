'use client'
// library
import { 
  ElementType, 
  FC, 
  ReactNode, 
  useEffect, 
  useRef 
} from "react";

// types
export type EntryAnimationStyles = {
  opacity?: string; // opacity transition in seconds and timing function (i.e. '0.5s ease-in-out')
  transform?: string;  // transform transition in seconds
  translateX?: string; // x-axis offset at start
  translateY?: string; // y-axis offset at start
};

type EntryAnimationProps = {
  children: ReactNode;
  className?: string;
  intersectionOptions?: IntersectionObserverInit;
  styleOptions?: EntryAnimationStyles;
  wrapperElement: ElementType;
};

const EntryAnimation: FC<EntryAnimationProps>  = ({ 
  children, 
  className, 
  intersectionOptions, 
  styleOptions, 
  wrapperElement: Wrapper
}) => {
  const targetElement = useRef<HTMLElement | null>(null);

  // instantiate intersection observer on mount
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && targetElement.current) {
          targetElement.current.style.opacity = '1';
          targetElement.current.style.transform = 'translateX(0)';
          targetElement.current.style.transform = 'translateY(0)';
        } 
      });
    }, intersectionOptions);

    if (targetElement.current) {
      observer.observe(targetElement.current);
    }
  }, []);

  return (
    <Wrapper 
      className={ className }
      ref={ targetElement }
      style={{ 
        opacity: `${ styleOptions?.opacity ? 0 : 1 }`, 
        transform: `
          translateX(${ styleOptions?.translateX ?? '0' })
          translateY(${ styleOptions?.translateY ?? '0' })
        `, 
        transition: `
          opacity ${ styleOptions?.opacity ?? '0s' },
          transform ${ styleOptions?.transform ?? '0s' }
        `
      }} 
    >
      { children }
    </Wrapper>
  )
};

export default EntryAnimation;