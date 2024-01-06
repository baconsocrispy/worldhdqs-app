'use client'
// library
import { FC, useContext, useEffect } from "react";

// components
import Image from "next/image";

// types
import { SerializedImage, Theme } from "@/app/types";
import { ThemeContext } from "@/app/contexts/theme.context";

type WinterSceneProps = {
  backgroundColor?: string;
  color?: string;
  image: SerializedImage;
};

const WinterScene: FC<WinterSceneProps> = ({ 
  image
}) => {
  // state
  const { theme } = useContext(ThemeContext);

  return (
    <div 
      className={ `winter-scene ${ theme?.className ?? '' }`}
    >
      <Image 
          alt="a cozy New England wintertime landscape"
          className="winter-scene__image"
          fill
          src={ image.src }
          unoptimized
        />
        <div 
          className="winter-scene__sky"
          style={{
            backgroundImage: `url(${ '/sky/night-sky.jpg'})`,
            backgroundSize: 'contain'
         }}
        />
        <div className="winter-scene__smoke">
          <div className="winter-scene__smoke-container">
            <Image 
              alt='chimney smoke'
              className="winter-scene__smoke-img--1"
              fill
              src={ '/smoke/smoke-1.png' }
            />
          </div>
          <div className="winter-scene__smoke-container">
            <Image 
              alt='chimney smoke'
              className="winter-scene__smoke-img--2"
              fill
              src={ '/smoke/smoke-1.png' }
            />
          </div>
          <div className="winter-scene__smoke-container">
            <Image 
              alt='chimney smoke'
              className="winter-scene__smoke-img--3"
              fill
              src={ '/smoke/smoke-1.png' }
            />
          </div>
        </div>
        <div className="winter-scene__fire" />
    </div>
  )
};

export default WinterScene;