'use client'
// library
import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from "react";

// types
type RotatingCarouselProps = {
  debounce?: number; // number representing milliseconds
  items: ReactNode[];
  panelOffset?: number;
  time?: number;
};

const RotatingCarousel: FC<RotatingCarouselProps> = ({ 
  debounce = 0, items, panelOffset, time = 2 
}) => {
  // state
  const carousel = useRef<HTMLDivElement>(null);
  // apothem is the radius from the center of a regular 
  // polygon to the middle of one of its sides
  const [ apothem, setApothem ] = useState(0);

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
            console.log(panelWidth);
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

  return (
    <div className="rotating-carousel" ref={ carousel }>
      <div 
        className="rotating-carousel__container"
      >
        { items.map((item, index) => 
          <div
            className='rotating-carousel__content'
            style={{ 
              transform: `rotateY(${( 360 / items.length) * index }deg) translateZ(${ apothem }px)`
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