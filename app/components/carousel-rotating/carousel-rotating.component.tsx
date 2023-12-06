'use client'
// library
import { CSSProperties, FC, ReactNode } from "react";

// types
type RotatingCarouselProps = {
  items: ReactNode[];
  time?: number;
};

const RotatingCarousel: FC<RotatingCarouselProps> = ({ 
  items, time = 2 
}) => {
  return (
    <div className="rotating-carousel">
      { items.map((item, index) => 
        <div
          className='rotating-carousel__content'
          style={ { '--rotateY': `${( 360 / items.length) * index }deg` } as CSSProperties } 
          key={ index }
        >
          { item }
        </div>
      )}
    </div>
  )   
};

export default RotatingCarousel;