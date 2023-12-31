'use client'
// library
import { FC, useState } from "react";

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
  textAnimation?: string;
  imageAnimation?: string;
  items: AnimatedCarouselItem[];
  time?: number; // animation duration in seconds
};

const AnimatedCarousel: FC<AnimatedCarouselProps> = ({ 
  animationDelay = 0,
  textAnimation,
  imageAnimation, 
  items, 
  time = 2,
}) => {
  // state
  const [ currentItemIndex, setCurrentItemIndex ] = useState(0);
  const onLastIndex = currentItemIndex === items.length - 1;
  const currentItem = items[currentItemIndex];

  const handelAnimationIteration = () => {
    const rotateNext = () => {
      const nextIndex = onLastIndex ? 0 : currentItemIndex + 1;
      setCurrentItemIndex(nextIndex);
    };
    rotateNext();
  };

 

  return (
    <div className="animated-carousel">
      <h4 
        className="animated-carousel__heading"
        style={{ animation: `${ textAnimation } ${ time * 1000 }ms ease-in-out infinite ${ animationDelay * 1000 }ms`}}
        onAnimationIteration={ handelAnimationIteration }
      >
        { currentItem.text ?? '' }
      </h4>
      <div
        className="animated-carousel__image-container"
        onAnimationIteration={ handelAnimationIteration }
        style={{ animation: `${ imageAnimation } ${ time * 1000 }ms ease-in-out infinite ${ animationDelay * 1000 }ms` }}
      >
        <Image
          alt='img'
          className={ cleanClassName(
            'animated-carousel__image',
            '', 
            currentItem.image.invert ? 'inverted' : undefined
          )}
          src={ currentItem.image.src }
          fill
        />
      </div>
    </div>
  )
};

export default AnimatedCarousel;