'use client'
import { cleanClassName } from "@/app/helpers";
// library
import { FC, ReactNode, useEffect, useRef, useState } from "react";

// types
type RotatingCarouselProps = {
  animationOptions?: {
    name: string;
    duration: number;
    timingFunction: string;
    iterationCount: string;
  };
  className?: string;
  control?: 'auto' | 'manual' | 'remote';
  debounce?: number; // number representing milliseconds
  items: ReactNode[];
  panelOffset?: number;
  remoteIndex?: number;
};

const RotatingCarousel: FC<RotatingCarouselProps> = ({ 
  animationOptions = { 
    timingFunction: 'linear', 
    iterationCount: 'infinite' 
  }, 
  className,
  control = 'remote',
  debounce = 0, 
  items, 
  panelOffset,
  remoteIndex
}) => {
  // state
  const carousel = useRef<HTMLDivElement>(null);
  // apothem is the radius from the center of a regular 
  // polygon to the middle of one of its sides
  const [ apothem, setApothem ] = useState(0);
  const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);
  const [ currentRotation, setCurrentRotation ] = useState(0);

  // responsively configure carousel panel dimensions as viewport changes size
  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout> | null;

    // calculate apothem for translateZ() value
    const calculateApothem = () => {
      const carouselObj = carousel.current;

      if (carouselObj) {
        const resizeObserver = new ResizeObserver(() => { 
          if (resizeTimer) clearTimeout(resizeTimer);  

          resizeTimer = setTimeout(() => {
            const panelWidth = carouselObj.getBoundingClientRect().width;
            const currentApothem = panelWidth / (2 * Math.tan(Math.PI / items.length));
            panelOffset ? 
              setApothem(currentApothem + panelOffset) :
              setApothem(currentApothem)
            resizeTimer = null;
          }, debounce)
        });

        resizeObserver.observe(carouselObj);

        // prevent memory leak
        return () => {
          resizeObserver.disconnect();
          if (resizeTimer) clearTimeout(resizeTimer);
        };
      };
    };
    calculateApothem();
  }, [ debounce, items.length, panelOffset ]);

  // controls
  // rotate slides from external component via remoteIndex prop
  useEffect(() => {
    if (control !== 'remote') return;

    const rotateCarousel = () => {
      (remoteIndex || remoteIndex === 0) && setCurrentSlideIndex(remoteIndex);

      if (remoteIndex || remoteIndex === 0) {
        const rotationDegrees = -(remoteIndex * 360 / items.length);
        setCurrentRotation(rotationDegrees);
      }
    };

    rotateCarousel();
    
  }, [ remoteIndex ]);
  

  return (
    <div 
      className={ cleanClassName(
        'rotating-carousel',
        undefined,
        className
      )}
      ref={ carousel }
    >
      <div 
        className="rotating-carousel__content-container"
        // style={{ 
        //   animationName: animationOptions?.name, 
        //   animationDuration: `${ animationOptions?.duration }s`, 
        //   animationTimingFunction: animationOptions?.timingFunction,
        //   animationIterationCount: animationOptions?.iterationCount
        // }}
        style={{ 
          transform: `rotateY(${ currentRotation }deg)`,
          transition: 'transform 1s ease-in-out' 
        }}
      >
        { items.map((item, index) => 
          <div
            className='rotating-carousel__content'
            style={{ 
              transform: `
                rotateY(${( 360 / items.length) * index }deg) 
                translateZ(${ apothem }px)
              `
            }} 
            key={ index }
          >
            { item }
          </div>
        )}
      </div>
    </div>
  )   
};

export default RotatingCarousel;