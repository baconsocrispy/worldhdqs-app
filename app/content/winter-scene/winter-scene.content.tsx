// library
import { FC } from "react";

// components
import Image from "next/image";

// types
import { SerializedImage } from "@/app/types";

type WinterSceneProps = {
  image: SerializedImage;
  skyColor?: string;
};

const WinterScene: FC<WinterSceneProps> = ({ image, skyColor = 'black' }) => {
  return (
    <div 
      className='winter-scene'

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