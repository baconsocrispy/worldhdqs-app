'use client'
// library
import { FC, ReactNode, useEffect, useState } from "react";

// types
type FlipCarouselProps = {
  duration?: number; // time panel faces viewer
  items: ReactNode[];
  transition?: number; // time to rotate panel
};

const FlipCarousel: FC<FlipCarouselProps> = ({ 
  duration = 2, 
  items, 
  transition = 1
}) => {
  // state
  const [ frontIndex, setFrontIndex ] = useState(0);
  const [ backIndex, setBackIndex ] = useState(1);
  const [ flipped, setFlipped ] = useState(false);

  useEffect(() => {
    const rotateNext = () => {
      setFlipped(!flipped);
      flipped ? 
        setFrontIndex(
          backIndex === items.length - 1  ? 0 : backIndex + 1
        ):
        setBackIndex(
          frontIndex === items.length - 1 ? 0 : frontIndex + 1
        );
    };

    const interval = setInterval(rotateNext, duration * 1000);

    return () => clearInterval(interval);
  }, [ backIndex, duration, flipped, frontIndex, items.length ]);

  return (
    <div className="flip-carousel">
      <div 
        className={ flipped ? 
          `flip-carousel__content-container flip-carousel__content-container--flipped` :
          'flip-carousel__content-container'
        }
        style={{ transition: `transform ${ transition }s ease-in-out` }}
      >
        <div className="flip-carousel__front-content">
          { items[frontIndex] }
        </div>
        <div className="flip-carousel__back-content">
          { items[backIndex] }
        </div>
      </div>
    </div>
  )
};

export default FlipCarousel;