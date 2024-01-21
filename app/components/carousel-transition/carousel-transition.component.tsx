'use client'
// library
import { FC, useEffect, useState } from "react";

// components
import Image from "next/image";

// types
import { SerializedImage } from "@/app/types";
import { cleanClassName } from "@/app/helpers";

type TransitionCarouselProps = {
  control?: 'auto';
  images: SerializedImage[];
  transitionDuration?: number;
};

const TransitionCarousel: FC<TransitionCarouselProps> = ({ 
  control = 'auto',
  images, 
  transitionDuration = 2 
}) => {
  // state
  const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);

  // automatically rotate slides
  useEffect(() => {
    if (control !== 'auto') return;

    const rotateNext = () => {
      setCurrentSlideIndex((currentSlideIndex + 1) % images.length);
    };

    const interval = setInterval(rotateNext, transitionDuration * 1000);

    return () => clearInterval(interval);
  }, [ currentSlideIndex ])

  return (
    <div className="transition-carousel">
      {
        images.map((image, index) => 
          <div 
            key={ image.id } 
            className={ cleanClassName(
              "transition-carousel__image-container",
              currentSlideIndex === index ? undefined : 'hidden'
            )}
            style={{ transitionDuration: `${ transitionDuration }s` }}
          >
            <Image 
              alt={ image.alt ?? `Transition carousel item ${ index }` }
              className="transition-carousel__image"
              src={ image.src }
              fill
            />
          </div>
        )
      }
    </div>
  )
};

export default TransitionCarousel;