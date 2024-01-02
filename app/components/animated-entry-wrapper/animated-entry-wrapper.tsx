'use client'

// library
import { 
  CSSProperties,
  ElementType, 
  forwardRef,
  ReactNode, 
  useEffect, 
  useRef 
} from "react";

// types
import { IntersectionObserverOptions } from "@/app/types";

type AnimatedEntryWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string | number;
  intersectionOptions?: IntersectionObserverOptions;
  style?: CSSProperties;
  wrapperElement: ElementType;
};

const AnimatedEntryWrapper = forwardRef<HTMLElement, AnimatedEntryWrapperProps>(
  function AnimatedEntryWrapper ({ 
  children, 
  className,
  id,
  intersectionOptions,
  style,
  wrapperElement: Wrapper
}, ref) {
  // state
  const targetElement = useRef<HTMLElement | null>(null);

  // instantiate intersection observer on mount
  useEffect(() => {
    // return if not planning to use intersection observer
    if (!intersectionOptions) return;

    const thisElement = targetElement.current;
    const intersectionElement = intersectionOptions?.intersectionTarget?.current ?? thisElement;

    console.log(intersectionOptions);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && intersectionElement && thisElement) {
          // add intersected class to target element to trigger styling / animations
          intersectionElement?.classList.add('intersected')
        } else if (
          !entry.isIntersecting && 
          intersectionElement && 
          intersectionOptions.transitionRepeat
        ) {
          intersectionElement?.classList.remove('intersected');
        }
      });
    }, intersectionOptions?.intersectionObserverInit);

    if (intersectionElement) {
      observer.observe(intersectionElement);
    }
  }, [ intersectionOptions ]);

  return (
    <Wrapper 
      className={ className }
      id={ id }
      ref={ (refInstance: HTMLElement | null) => {
        targetElement.current = refInstance;
        if (typeof ref === 'function') {
          ref(refInstance);
        } else if (ref) {
          ref.current = refInstance
        }
      }}
      style={{
        ...style,
        transitionDelay: intersectionOptions?.transitionDelay ?
          intersectionOptions.transitionDelay.toString() + 's' : '0s'
      }}
    >
      { children }
    </Wrapper>
  )
});

export default AnimatedEntryWrapper;