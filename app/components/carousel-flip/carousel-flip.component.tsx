'use client'
// library
import { FC, ReactNode, useEffect, useState } from "react";
import Heading from "../heading/heading.component";

// types
export type FlipCarouselItem = {
  content: ReactNode;
  text?: string;
};

type FlipCarouselProps = {
  duration?: number; // time panel faces viewer
  items: FlipCarouselItem[];
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
  const [ currentIndex, setCurrentIndex ] = useState(0);

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
      setCurrentIndex(currentIndex === items.length -1 ? 0 : currentIndex + 1);
    };

    const interval = setInterval(rotateNext, duration * 1000);

    return () => clearInterval(interval);
  }, [ currentIndex, backIndex, duration, flipped, frontIndex, items.length ]);

  return (
    <div className="flip-carousel">
      {
        items[currentIndex].text &&
          <Heading 
            key={ currentIndex } 
            className='flip-carousel__heading' 
            size={ 4 }
            style={{
              animation: `${ flipped ? 'enterRight' : 'enterLeft' } 1s ease-in-out`,
              right: flipped ? '0' : undefined
            }}
          >
            { items[currentIndex].text }
          </Heading>
      }
      <div 
        className={ flipped ? 
          `flip-carousel__content-container flip-carousel__content-container--flipped` :
          'flip-carousel__content-container'
        }
        style={{ transition: `transform ${ transition }s ease-in-out` }}
      >
        <div className="flip-carousel__front-content">
          { items[frontIndex].content }
        </div>
        <div className="flip-carousel__back-content">
          { items[backIndex].content }
        </div>
      </div>
    </div>
  )
};

export default FlipCarousel;