'use client'
// library
import { FC, ReactNode, useEffect, useRef } from "react";

// types
type StyleOptions = {
  opacity?: string;
  transform?: string;
  translateX?: string;
  translateY?: string;
};

type EntryAnimationProps = {
  children: ReactNode;
  className?: string;
  observerOptions?: IntersectionObserverInit;
  styleOptions?: StyleOptions;
};

const EntryAnimation: FC<EntryAnimationProps>  = ({ 
  children, className, observerOptions, styleOptions
}) => {
  const targetElement = useRef<HTMLDivElement>(null);

  // create intersection observer on mount
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && targetElement.current) {
          targetElement.current.style.opacity = '1';
          targetElement.current.style.transform = 'translateX(0)';
          targetElement.current.style.transform = 'translateY(0)';
        } 
      });
    }, observerOptions);

    if (targetElement.current) {
      observer.observe(targetElement.current);
    }
  }, []);

  return (
    <div 
      className={ className }
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
        ref={ targetElement }
      >
      { children }
    </div>
  )
};

export default EntryAnimation;