'use client'

// library
import { 
  ElementType, 
  forwardRef,
  MutableRefObject,
  ReactNode, 
  useEffect, 
  useRef 
} from "react";

// types
import { AnimationOptions } from "@/app/types";

type AnimatedEntryWrapperProps = {
  animationOptions?: AnimationOptions;
  children: ReactNode;
  className?: string;
  id?: string | number;
  index?: number;
  intersectionOptions?: IntersectionObserverInit;
  intersectionTarget?: MutableRefObject<HTMLElement | null>;
  wrapperElement: ElementType;
};

const AnimatedEntryWrapper = forwardRef<HTMLElement, AnimatedEntryWrapperProps>(
  function AnimatedEntryWrapper ({ 
  animationOptions,
  children, 
  className,
  id,
  index = 1,
  intersectionOptions, 
  intersectionTarget,
  wrapperElement: Wrapper
}, ref) {
  // state
  const targetElement = useRef<HTMLElement | null>(null);
  const transitionDelay = animationOptions?.transitionDelay ?? 0;

  // instantiate intersection observer on mount
  useEffect(() => {
    // return if not planning to use intersection observer
    if (!intersectionOptions && !animationOptions) return;

    const thisElement = targetElement.current;
    const intersectionElement = intersectionTarget?.current ?? thisElement;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && intersectionElement && thisElement) {
          // add intersected class to target element for additional styling
          intersectionElement?.classList.add('intersected')

          console.log(entry.isIntersecting);

          // reset animation properties
          thisElement.style.opacity = '1';
          thisElement.style.transform = 'translateX(0)';
          thisElement.style.transform = 'translateY(0)';
          thisElement.style.filter = 'blur(0px)';
        } else if (!entry.isIntersecting && intersectionElement) {
          intersectionElement?.classList.remove('intersected');
        }
      });
    }, intersectionOptions);

    if (intersectionElement) {
      observer.observe(intersectionElement);
    }
  }, [ animationOptions, intersectionOptions, intersectionTarget ]);

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
        filter: `blur(${ animationOptions?.blur ?? '0px' })`,
        opacity: `${ animationOptions?.opacity ?? '0s' }`, 
        transform: `
          translateX(${ animationOptions?.translateX ?? '0' }%)
          translateY(${ animationOptions?.translateY ?? '0' }%)
        `, 
        transition: `
          all
          ${ animationOptions?.transitionDuration ?? '0s' }
          ${ animationOptions?.transitionFunction ?? 'linear'}
        `,
        transitionDelay: (transitionDelay * index).toString() + 's',
      }} 
    >
      { children }
    </Wrapper>
  )
});

export default AnimatedEntryWrapper;