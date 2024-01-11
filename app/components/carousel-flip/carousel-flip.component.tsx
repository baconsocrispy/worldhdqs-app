'use client'
// library
import { FC, ReactNode, useEffect, useState } from "react";

//components
import Heading from "../heading/heading.component";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
export type FlipCarouselItem = {
  content: ReactNode;
  text?: string;
};

type FlipCarouselProps = {
  className?: string;
  control?: 'auto' | 'manual' | 'remote';
  duration?: number; // time panel faces viewer
  items: FlipCarouselItem[];
  remoteIndex?: number;
  transition?: number; // time to rotate panel
};

const FlipCarousel: FC<FlipCarouselProps> = ({ 
  className,
  control = 'remote',
  duration = 2, 
  items, 
  remoteIndex,
  transition = 1
}) => {
  // state
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ frontIndex, setFrontIndex ] = useState(currentIndex);
  const [ backIndex, setBackIndex ] = useState((currentIndex + 1) % items.length);
  const [ flipped, setFlipped ] = useState(false);
  const [ firstIteration, setFirstIteration ] = useState(true);


  // rotate slides from external component via remoteIndex prop
  useEffect(() => {
    if (control !== 'remote') return;

    const rotateCarousel = () => {
      if (remoteIndex || remoteIndex === 0) {
        let newIndex;

        remoteIndex < 0 ?
          newIndex = (remoteIndex % items.length + items.length) % items.length :
          newIndex = remoteIndex % items.length;

        setFlipped(!flipped);
  
        flipped ? 
          setFrontIndex(
            newIndex
          ) :
          setBackIndex(
            newIndex
          )
          
        setCurrentIndex(newIndex);
      }
    };

    !firstIteration && rotateCarousel();
    firstIteration && setFirstIteration(false);
    
  }, [ remoteIndex ]);

  // automatatic slide rotation when control set to auto
  useEffect(() => {
    if (control !== 'auto') return;

    const rotateNext = () => {
      setFlipped(!flipped);
      flipped ? 
        setFrontIndex(
          (frontIndex + 2) % items.length
        ):
        setBackIndex(
          (backIndex + 2) % items.length
        );
      setCurrentIndex((currentIndex + 1) % items.length);
    };

    const interval = setInterval(rotateNext, duration * 1000);

    return () => clearInterval(interval);
  }, [ backIndex, control, currentIndex, duration, flipped, frontIndex, items.length ]);

  return (
    <div className={ cleanClassName(
      'flip-carousel',
      undefined,
      className
    )}>
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
        className={ cleanClassName(
            'flip-carousel__content-container',
            flipped ? 'flipped' : undefined
          )
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