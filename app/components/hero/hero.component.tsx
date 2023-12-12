'use client'
// library
import { FC,  ReactNode,  useState } from "react";

// components
import Heading from "../heading/heading.component";
import Image from "next/image";

// types
import { HeroContent, SerializedImage } from "@/app/types";

type HeroProps = {
  content: ReactNode[];
  heading?: string;
  images: SerializedImage[];
  leadIn?: string;
  subHeading?: string;
};

const Hero: FC<HeroProps> = ({ content, heading, images, leadIn, subHeading }) => {
  // state
  const [ selectedContent, setSelectedContent ] = useState<ReactNode>(content[0]);
  const [ hoverContent, setHoverContent ] = useState<ReactNode | null>(null);

  // layout
  let columns;

  if (content.length === 1 || content.length === 2) {
    let columns = 1;
  } else  {
    let columns = 3;
  }

  const handleMouseEnter = (index: number) => {
    setHoverContent(content[index]);
  };

  const handleMouseLeave = () => {
    setHoverContent(null);
  };

  return (
    <div className="hero">
      <div className="hero__content-container">
        { hoverContent ?? selectedContent }
        <div className="hero__text"> 
          <p className="hero__lead-in">{ leadIn }</p>
          <Heading className="hero__heading" size={ 1 }>
            { heading }
          </Heading>
          <Heading className="hero__sub-heading" size={ 4 }>
            { subHeading }
          </Heading>
        </div>
      </div>
      <div 
        className="hover-overlay" 
        style={{ gridTemplateColumns: `repeat(${ columns }, 1fr)` }}
      >
          {
            content.map((_, index) => 
              <div 
                key={ index } 
                className="hover-divisions__section" 
                onMouseEnter={ () => handleMouseEnter(index) }
                onMouseLeave={ handleMouseLeave }
                onClick={ () => setSelectedContent(content[index]) }
              />
            )
          }
      </div>
    </div>
  )
};

export default Hero;