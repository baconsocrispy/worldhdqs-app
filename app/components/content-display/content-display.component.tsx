'use client'
// library
import { FC, ReactNode, useState } from "react";

// components
import AnimatedCarousel from "../carousel-animated/carousel-animated.component";
import FlipCarousel from "../carousel-flip/carousel-flip.component";
import List from "../list/list.component";
import RotatingCarousel from "../carousel-rotating/carousel-rotating.component";
import Video from "../video/video.component";
import Tabs from "../tabs/tabs.component";

// data
import {lineProd, photos, product, rotatingContent, skills, studio } from "@/app/data";

// types
type ContentDisplayProps = {
  content: ReactNode[];
}

const ContentDisplay: FC<ContentDisplayProps> = ({ content }) => {
  // state
  const [ contentIndex, setContentIndex ] = useState(0);

  // handlers
  const onTabClick = (index: number) => {
    setContentIndex(index);
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
        <AnimatedCarousel
          className={ contentIndex === 0 ? undefined : 'hidden' }
          textAnimation="whizLeftToRight"
          imageAnimation='whizRightToLeft'
          items={ skills } 
          time={ 2 }
        />
        <RotatingCarousel 
          animationOptions={{
            name: 'rotate',
            duration: 10,
            timingFunction: 'linear',
            iterationCount: 'infinite'
          }}
          className={ contentIndex === 1 ? undefined : 'hidden' }
          key={ 1 }
          items={ rotatingContent }
          panelOffset={ 15 }
        />
        <FlipCarousel 
          className={ contentIndex === 2 ? undefined : 'hidden' }
          duration={ 10 }
          items={[ 
            { 
              content: <AnimatedCarousel 
                          animationDelay={ 1 }
                          imageAnimation="noAnimation"
                          time={ 1 }
                          items={ photos }
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
                          animationDelay={ 1 }
                          imageAnimation="noAnimation"
                          time={ 1 }
                          items={ studio }
                        />,
              text: 'Studio Production'
            },
            { 
              content: <AnimatedCarousel 
                          animationDelay={ 1 }
                          imageAnimation="noAnimation"
                          time={ 1 }
                          items={ product }
                        />,
              text: 'Product Photography'
            },
          ]}
          key={ 2 }
        />
      </div>

      <div className="content-display__controls">
        <span className="content-display__controls--left">&#x2190;</span>
        <span className="content-display__controls--right">&#x2192;</span>
      </div>
    </div>
  )
};

export default ContentDisplay;