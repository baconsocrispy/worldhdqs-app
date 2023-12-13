'use client'
// library
import { FC, useContext } from "react";

// components
import Image from "next/image";

// types
import { SerializedImage } from "@/app/types";
import { ThemeContext } from "@/app/contexts/theme.context";

type WinterSceneProps = {
  image: SerializedImage;
  skyColor?: string;
};

const WinterScene: FC<WinterSceneProps> = ({ image, skyColor = 'black' }) => {
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
          style={{ background: skyColor }}
        />
      <div className="winter-scene__snow">
      </div>
    </div>
  )
};

export default WinterScene;