'use client'
// library
import { FC, useState } from "react";

// components
import Heading from "../heading/heading.component";
import Image from "next/image";

// types
import { SerializedImage } from "@/app/types";
type HeroProps = {
  heading?: string;
  images: SerializedImage[];
  leadIn?: string;
  subHeading?: string;
};

const Hero: FC<HeroProps> = ({ heading, images, leadIn, subHeading }) => {
  // state
  const [ selectedImage, setSelectedImage ] = useState<string>(images[0].src);
  const [ hoverImage, setHoverImage ] = useState<string | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoverImage(images[index].src);
  };

  const handleMouseLeave = () => {
    setHoverImage(null);
  };

  return (
    <div className="hero">
      <div className="hero__content">
        <Image 
          className="hero__image"
          src={ hoverImage ?? selectedImage }
          fill
          alt="bg1"
        />
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
      <div className="hover-overlay">
          {
            images.map((image, index) => 
              <div 
                key={ image.id } 
                className="hover-divisions__section" 
                onMouseEnter={ () => handleMouseEnter(index) }
                onMouseLeave={ handleMouseLeave }
                onClick={ () => setSelectedImage(images[index].src) }
              />
            )
          }
      </div>
    </div>
  )
};

export default Hero;