// library
import { FC } from "react";

// components
import Image from "next/image";

// types
import { SerializedImage } from "@/app/types";

type CityProps = {
  image: SerializedImage;
};

const City: FC<CityProps> = ({ image }) => {
  return (
    <div className="city">
        <Image 
          className="city__image"
          src={ image.src }
          fill
          alt="bg1"
        />
    </div>
  )
};

export default City;