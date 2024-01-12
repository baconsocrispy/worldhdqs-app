'use client'
// library
import { FC, MouseEventHandler, ReactNode, useState } from "react";

// components
import AnimatedCarousel, { AnimatedCarouselItem } from "../carousel-animated/carousel-animated.component";
import FlipCarousel from "../carousel-flip/carousel-flip.component";
import List from "../list/list.component";
import RotatingCarousel from "../carousel-rotating/carousel-rotating.component";
import Video from "../video/video.component";
import Tabs from "../tabs/tabs.component";

// data
import {lineProd, rotatingContent } from "@/app/data";
import { productPhotos } from "@/app/data/product-photos.data";
import { skills } from "@/app/data/skills.data";
import { studioPhotos } from "@/app/data/studio-photos.data";
import { lifestylePhotos } from "@/app/data/lifestyle-photos.data";

// types
type ContentDisplayProps = {
  content: ReactNode[];
}

const ContentDisplay: FC<ContentDisplayProps> = ({ content }) => {
  // state
  const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);
  const [ contentIndex, setContentIndex ] = useState(0);

  // handlers
  const onTabClick = (index: number) => {
    setContentIndex(index);
    setCurrentSlideIndex(0);
  };

  const handleNextArrowClick: MouseEventHandler = () => {
    setCurrentSlideIndex(currentSlideIndex + 1);
  };

  const handlePrevArrowClick: MouseEventHandler = () => {
    setCurrentSlideIndex(currentSlideIndex - 1);
  };

  return (
    <div className="content-display">
      <Tabs 
        onTabClick={ onTabClick }
        selectedIndex={ contentIndex }
        tabTitles={ [
          'Custom Software Development',
          'Branding & Graphic Design',
          'Content Production'
        ]}
      />

      <div className="content-display__content">
        <div 
            className="winter-scene__sky"
            style={{
              backgroundImage: `url(${ '/sky/night-sky.jpg'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom'
          }}
          />
        <AnimatedCarousel
          key={ `carousel-${ contentIndex }-0` }
          animationOptions={{
            duration: 3,
            entryAnimation: 'enter',
            exitAnimation: 'exit',
            imageAnimation: 'rotate'
          }}
          className={ contentIndex === 0 ? undefined : 'hidden' }
          control="remote"
          items={ skills.map((skill) => {
            return {
              id: skill.id,
              images: skill.images,
              text: skill.text,
              title: skill.title,
            } as AnimatedCarouselItem;
          })} 
          remoteIndex={ currentSlideIndex }
        />
        <RotatingCarousel 
          key={ `carousel-${ contentIndex }-1` }
          animationOptions={{
            name: 'rotate',
            duration: 10,
            timingFunction: 'linear',
            iterationCount: 'infinite'
          }}
          className={ contentIndex === 1 ? undefined : 'hidden' }
          items={ rotatingContent }
          panelOffset={ 15 }
          remoteIndex={ currentSlideIndex }
        />
        <FlipCarousel 
          key={ `carousel-${ contentIndex }-2}` }
          className={ contentIndex === 2 ? undefined : 'hidden' }
          control="remote"
          duration={ 10 }
          items={[ 
            { 
              content: <AnimatedCarousel 
                          animationOptions={{
                            entryAnimation: 'fade-in',
                            exitAnimation: 'fade-out'
                          }}
                          control="auto"
                          imageOptions={{ imageFit: 'cover' }}
                          items={ lifestylePhotos.map((photo) => {
                            return {
                              id: photo.id,
                              image: photo,
                              images: [ photo ]
                            } as AnimatedCarouselItem;
                          }) }
                        />,
              text: 'Lifestyle/Street Photography'
            },
            {
              content: <Video src='/vid/raptor_1.mp4' />,
              text: 'Commercial Video'
            },
            {
              content: <List 
                          intersectionOptions={{ 
                            intersectionObserverInit: { threshold: 0.5 },
                            transitionClass: 'fade-in-alternate'
                          }}
                          listItems={ lineProd } 
                          type="nav"
                        />,
              text: 'Line Producing & Editing'
            },
            { 
              content: <AnimatedCarousel 
                          control="auto"
                          imageOptions={{ imageFit: 'cover' }}
                          items={ studioPhotos.map((photo) => {
                            return {
                              id: photo.id,
                              image: photo,
                              images: [ photo ]
                            }
                          }) }
                        />,
              text: 'Studio Production'
            },
            { 
              content: <AnimatedCarousel 
                          control="auto"
                          imageOptions={{ imageFit: 'cover' }}
                          items={ productPhotos.map((photo) => {
                            return {
                              id: photo.id,
                              image: photo,
                              images: [ photo ]
                            }
                          })}
                        />,
              text: 'Product Photography'
            },
          ]}
          remoteIndex={ currentSlideIndex }
        />
      </div>

      <div className="content-display__controls">
        <span 
          className="content-display__controls--left"
          onClick={ handlePrevArrowClick }
        >
          &#x2190;
        </span>

        <span 
          className="content-display__controls--right"
          onClick={ handleNextArrowClick }
        >
          &#x2192;
        </span>
      </div>
    </div>
  )
};

export default ContentDisplay;