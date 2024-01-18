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
  id: number;
  images: SerializedImage[];
  text?: string;
  title?: string;
};

type AnimatedCarouselProps = {
  animationOptions?: {
    duration?: number;
    entryAnimation?: string;
    exitAnimation?: string;
    imageAnimation?: string;
  };
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
    duration: 2
  },
  className,
  control = 'auto',
  imageOptions = {
    imageFit: 'contain'
  },
  items, 
  remoteIndex
}) => {
  // flag which item is currently displayed
  const [ currentActive, setCurrentActive ] = useState(true);

  // initialize current and next items
  const [ currentItemIndex, setCurrentItemIndex ] = useState(0);
  const [ nextItemIndex, setNextItemIndex ] = useState((currentItemIndex + 1) % items.length );

  // set initial animation states to show / hide
  const [ currentAnimation, setCurrentAnimation ] = useState('show');
  const [ nextAnimation, setNextAnimation ] = useState('hide');
  
  // flag to prevent animation running on mount when remote controlled
  const [ firstIteration, setFirstIteration ] = useState(true);

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
    
    // don't rotate carousel when useEffect runs first time
    !firstIteration && rotateCarousel();
    firstIteration && setFirstIteration(false);
      
  }, [ remoteIndex ]);

  return (
    <div className={ cleanClassName(
      'animated-carousel',
      undefined,
      className
    )}>
      <div className="animated-carousel__text-container">
        <p className="animated-carousel__text">
          { 
            currentActive ? 
              items[currentItemIndex]?.text : 
              items[nextItemIndex]?.text 
          }
        </p>
      </div>
      <div className="animated-carousel__content">
        <div 
          className="animated-carousel__heading-container"
          style={ items[currentItemIndex]?.title ? { padding: '1rem' } : { padding: '0' }}
        >
          <h4
            className={ cleanClassName(
              `animated-carousel__heading`,
              currentAnimation
            )}
          >
            { items[currentItemIndex]?.title }
          </h4>
          <h4
            className={ cleanClassName(
              `animated-carousel__heading`,
              nextAnimation
            )}
          >
            { items[nextItemIndex]?.title }
          </h4>
        </div> 
        
        <div className="animated-carousel__images-container">
          <div 
            className={ cleanClassName(
              "animated-carousel__images",
              currentAnimation
            )
          }>
            { items[currentItemIndex]?.images?.map((image) => (
              <div
                key={ image.id }
                className={ cleanClassName(
                  "animated-carousel__image-container",
                  animationOptions.imageAnimation
                )}
              >
                <Image
                  alt='img'
                  className={ cleanClassName(
                    'animated-carousel__image',
                    imageOptions.imageFit, 
                    image.invert ? 'inverted' : undefined
                  )}
                  src={ image.src }
                  fill
                />
              </div>
            ))}
          </div>

          <div 
            className={ cleanClassName(
              "animated-carousel__images",
              nextAnimation
            )}
          >
            {
              items[nextItemIndex]?.images?.map((image) => (
                <div
                  key={ image.id }
                  className={ cleanClassName(
                    "animated-carousel__image-container",
                    animationOptions.imageAnimation
                  )}
                >
                  <Image
                    alt='img'
                    className={ cleanClassName(
                      'animated-carousel__image',
                      imageOptions.imageFit, 
                      image.invert ? 'inverted' : undefined
                    )}
                    src={ image.src }
                    fill
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default AnimatedCarousel;