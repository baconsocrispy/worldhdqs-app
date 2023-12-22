'use client'
// library
import { FC, useEffect, useState } from "react";

// components
import Image from "next/image";

// types
import { SerializedImage, Skill } from "@/app/types";

export type AnimatedCarouselItem = {
  image: SerializedImage;
  text?: string;
}

type AnimatedCarouselProps = {
  textAnimation?: string;
  imageAnimation?: string;
  items: AnimatedCarouselItem[];
  time?: number; // animation duration in seconds
};

const AnimatedCarousel: FC<AnimatedCarouselProps> = ({ 
  textAnimation,
  imageAnimation, 
  items, 
  time = 2
}) => {
  // state
  const [ currentItemIndex, setCurrentItemIndex ] = useState(0);
  const onLastIndex = currentItemIndex === items.length - 1;

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
        style={{ animation: `${ textAnimation } ${ time * 1000 }ms ease-in-out infinite`}}
        onAnimationIteration={ handelAnimationIteration }
      >
        { items[currentItemIndex].text ?? '' }
      </h4>
      <div
        className="animated-carousel__image-container"
        onAnimationIteration={ handelAnimationIteration }
        style={{ animation: `${ imageAnimation } ${ time * 1000 }ms ease-in-out infinite` }}
      >
        <Image
          alt='img'
          className="animated-carousel__image"
          src={ items[currentItemIndex].image.src }
          fill
          objectFit="contain"
        />
      </div>
    </div>
  )
};

export default AnimatedCarousel;