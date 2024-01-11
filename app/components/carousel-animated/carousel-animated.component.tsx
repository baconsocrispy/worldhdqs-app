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
  images?: SerializedImage[];
  text?: string;
};

type AnimatedCarouselProps = {
  animationOptions?: {
    duration?: number;
    entryAnimation?: string;
    exitAnimation?: string;
  }
  className?: string;
  control?: 'auto' | 'manual' | 'remote';
  imageOptions?: {
    imageFit?: 'contain' | 'cover';
  };
  items: AnimatedCarouselItem[];
  remoteIndex?: number;
};

const AnimatedCarousel: FC<AnimatedCarouselProps> = ({ 
  animationOptions = {
    duration: 2,
    entryAnimation: 'noneEnter',
    exitAnimation: 'noneExit'
  },
  className,
  control = 'auto',
  imageOptions = {
    imageFit: 'contain'
  },
  items, 
  remoteIndex
}) => {
  // state
  const [ currentItemIndex, setCurrentItemIndex ] = useState(0);
  const [ nextItemIndex, setNextItemIndex ] = useState((currentItemIndex + 1) % items.length );
  const [ currentActive, setCurrentActive ] = useState(true);

  // set initial animation states to none
  const [ currentAnimation, setCurrentAnimation ] = useState('noneEnter');
  const [ nextAnimation, setNextAnimation ] = useState('noneExit');
  
  // flag to prevent animation running on mount when remote controlled
  const [ firstIteration, setFirstIteration ] = useState(true);

  const currentItem = items[currentItemIndex];
  const nextItem = items[nextItemIndex];

  // automatatic slide rotation when control set to auto
  useEffect(() => {
    if (control !== 'auto') return;

    const rotateNext = () => {
      currentActive ? 
        setNextItemIndex(
          (currentItemIndex + 1) % items.length
        ) :
        setCurrentItemIndex(
          (nextItemIndex + 1) % items.length
        )
      setCurrentItemIndex((currentItemIndex + 1) % items.length);
      setCurrentActive(!currentActive);
    };

    const duration = animationOptions?.duration || 2;

    const interval = setInterval(rotateNext, duration * 1000);

    return () => clearInterval(interval);
  }, [ currentActive ]);

  // rotate slides from external component via remoteIndex prop
  useEffect(() => {
    if (control !== 'remote') return;

    const rotateCarousel = () => {
      if (remoteIndex || remoteIndex === 0) {

        let newIndex;

        remoteIndex < 0 ?
          newIndex = (remoteIndex % items.length + items.length) % items.length :
          newIndex = remoteIndex % items.length;
          
        currentActive ? setNextItemIndex(newIndex) : setCurrentItemIndex(newIndex);

       if (animationOptions.entryAnimation && animationOptions.exitAnimation) {
        currentActive ? setCurrentAnimation(animationOptions.exitAnimation) : setCurrentAnimation(animationOptions.entryAnimation);
        currentActive ? setNextAnimation(animationOptions.entryAnimation) : setNextAnimation(animationOptions.exitAnimation);
       }
      
       setCurrentActive(!currentActive);
      }
    };
  
    !firstIteration && rotateCarousel();
    firstIteration && setFirstIteration(false);
      
  }, [ remoteIndex ]);

  return (
    <div className={ cleanClassName(
      'animiated-carousel',
      undefined,
      className
    )}>
      <div className="animated-carousel__content">
        <div className="animated-carousel__heading-container">
          <h4
            className={ cleanClassName(
              `animated-carousel__heading`,
              currentAnimation
            )}
          >
            { currentItem.text ?? '' }
          </h4>
          <h4
            className={ cleanClassName(
              `animated-carousel__heading`,
              nextAnimation
            )}
          >
            { nextItem.text ?? '' }
          </h4>
        </div>
        
        <div className="animated-carousel__images-container">
          <div
            className={ cleanClassName(
              "animated-carousel__image-container",
              currentAnimation
            )}
          >
            <Image
              alt='img'
              className={ cleanClassName(
                'animated-carousel__image',
                imageOptions.imageFit, 
                currentItem.image.invert ? 'inverted' : undefined
              )}
              src={ currentItem.image.src }
              fill
            />
          </div>

          <div
            className={ cleanClassName(
              "animated-carousel__image-container",
              nextAnimation
            )}
          >
            <Image
              alt='img'
              className={ cleanClassName(
                'animated-carousel__image',
                imageOptions.imageFit, 
                currentItem.image.invert ? 'inverted' : undefined
              )}
              src={ nextItem.image.src }
              fill
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default AnimatedCarousel;