'use client'
// library
import { FC, useState } from "react";

// components
import Image from "next/image";

// types
import { SerializedImage } from "@/app/types";
type HeroProps = {
  images: SerializedImage[];
};

const Hero: FC<HeroProps> = ({ images }) => {
  const [ currentSection, setCurrentSection ] = useState<number>(0);
  const [ currentImage, setCurrentImage ] = useState<string>(images[0].src)

  const handleMouseEnter = (index: number) => {
    setCurrentImage(images[index].src);
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <Image 
          className="hero__image"
          src={ currentImage }
          fill
          alt="bg1"
        />
        <div className="hero__text"> 
          <p className="hero__lead-in">You Have Reached</p>
          <h1 className="hero__heading">
            World Headquarters
          </h1>
          <p className="hero__sub-heading">
            Creative Workshop
          </p>
        </div>
      </div>
      <div className="hover-divisions">
          {
            images.map((image, index) => 
              <div 
                key={ image.id } 
                className="hover-divisions__item" 
                onMouseEnter={ () => handleMouseEnter(index) }
              />
            )
          }
        </div>
    </section>
  )
};

export default Hero;