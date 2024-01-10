'use client'
// library
import { FC, useEffect, useState } from "react";

// components
import Image from "next/image";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
import { SerializedImage } from "@/app/types";

export type AnimatedCarouselItem = {
  image: SerializedImage;
  text?: string;
}

type AnimatedCarouselProps = {
  animationDelay?: number;
  className?: string;
  control?: 'auto' | 'manual' | 'remote';
  imageAnimation?: string;
  items: AnimatedCarouselItem[];
  remoteIndex?: number;
  textAnimation?: string;
  time?: number; // animation duration in seconds
};

const AnimatedCarousel: FC<AnimatedCarouselProps> = ({ 
  animationDelay = 0,
  className,
  control = 'manual',
  textAnimation,
  imageAnimation, 
  items, 
  remoteIndex,
  time = 2,
}) => {
  // state
  const [ currentItemIndex, setCurrentItemIndex ] = useState(0);
  const onFirstIndex = currentItemIndex === 0;
  const onLastIndex = currentItemIndex === items.length - 1;
  const currentItem = items[currentItemIndex];

  // rotate slides from external component via remoteIndex prop
  useEffect(() => {
    if (control !== 'remote') return;

    const rotateCarousel = () => {
      if (remoteIndex || remoteIndex === 0) {

        let newIndex;

        remoteIndex < 0 ?
          newIndex = (remoteIndex % items.length + items.length) % items.length :
          newIndex = remoteIndex % items.length;
          
        setCurrentItemIndex(newIndex);
      }
    };
  
    rotateCarousel();
      
  }, [ remoteIndex ]);

  // handlers
  const rotateNext = () => {
    const nextIndex = onLastIndex ? 0 : currentItemIndex + 1;
    setCurrentItemIndex(nextIndex);
  };

  const rotatePrev = () => {
    const prevIndex = onFirstIndex ? items.length - 1 : currentItemIndex - 1;
    setCurrentItemIndex(prevIndex);
  };

  const handelAnimationIteration = () => {
    rotateNext();
  };

  return (
    <div className={ cleanClassName(
      'animiated-carousel',
      undefined,
      className
    )}>
      <div className="animated-carousel__content">
        <h4 
          className={ cleanClassName(
            `animated-carousel__heading`,
            'animated'
            )}
          // style={{ animation: `${ textAnimation } ${ time * 1000 }ms ease-in-out infinite ${ animationDelay * 1000 }ms`}}
          onAnimationIteration={ control === 'auto' ? handelAnimationIteration : undefined }
        >
          { currentItem.text ?? '' }
        </h4>
        
        <div
          className="animated-carousel__image-container"
          onAnimationIteration={ control === 'auto' ? handelAnimationIteration : undefined }
          // style={{ animation: `${ imageAnimation } ${ time * 1000 }ms ease-in-out infinite ${ animationDelay * 1000 }ms` }}
        >
          <Image
            alt='img'
            className={ cleanClassName(
              'animated-carousel__image',
              undefined, 
              currentItem.image.invert ? 'inverted' : undefined
            )}
            src={ currentItem.image.src }
            fill
          />
        </div>
      </div>
    </div>
  )
};

export default AnimatedCarousel;