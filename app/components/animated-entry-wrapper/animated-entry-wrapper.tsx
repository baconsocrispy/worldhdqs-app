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
export type AnimatedEntryWrapperStyles = {
  opacity?: string; // opacity transition in seconds and timing function (i.e. '0.5s ease-in-out')
  transform?: string;  // transform transition in seconds
  translateX?: number; // x-axis offset in rem at start
  translateY?: number; // y-axis offset in rem at start
  colorTiming?: string; // color & backgroundColor transition in seconds and timing function
  transitionDelay?: number;
};

type AnimatedEntryWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string | number;
  intersectionOptions?: IntersectionObserverInit;
  styleOptions?: AnimatedEntryWrapperStyles;
  wrapperElement: ElementType;
};

const AnimatedEntryWrapper: FC<AnimatedEntryWrapperProps>  = ({ 
  children, 
  className,
  id,
  intersectionOptions, 
  styleOptions, 
  wrapperElement: Wrapper
}) => {
  // state
  const targetElement = useRef<HTMLElement | null>(null);

  // instantiate intersection observer on mount
  useEffect(() => {
    // return if not planning to use intersection observer
    if (!intersectionOptions && !styleOptions) return;

    const element = targetElement.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && element) {
          // add intersected class to target element for additional styling
          element.classList.add('intersected')

          // reset opacity and translate to final position
          element.style.opacity = '1';
          element.style.transform = 'translateX(0)';
          element.style.transform = 'translateY(0)';
        } else if (!entry.isIntersecting && element) {
          element.classList.remove('intersected');
        }
      });
    }, intersectionOptions);

    if (element) {
      observer.observe(element);
    }
  }, [ intersectionOptions, styleOptions ]);

  return (
    <Wrapper 
      className={ className }
      id={ id }
      ref={ targetElement }
      style={{ 
        opacity: `${ styleOptions?.opacity ? 0 : 1 }`, 
        transform: `
          translateX(${ styleOptions?.translateX ?? '0' }rem)
          translateY(${ styleOptions?.translateY ?? '0' }rem)
        `, 
        transition: `
          opacity ${ styleOptions?.opacity ?? '0s' },
          transform ${ styleOptions?.transform ?? '0s' },
          background-color ${ styleOptions?.colorTiming ?? '0s' },
          color ${ styleOptions?.colorTiming ?? '0s' }
        `
      }} 
    >
      { children }
    </Wrapper>
  )
};

export default AnimatedEntryWrapper;