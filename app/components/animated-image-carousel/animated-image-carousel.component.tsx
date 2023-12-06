'use client'
// library
import { FC, useState } from "react";

// components
import Image from "next/image";

// types
import { Skill } from "@/app/types";

type AnimatedImageCarouselProps = {
  headingAnimation?: string;
  logoAnimation?: string;
  skills: Skill[];
  time?: number; // animation duration in seconds
};

const AnimatedImageCarousel: FC<AnimatedImageCarouselProps> = ({ 
  headingAnimation,
  logoAnimation, 
  skills, 
  time = 2
}) => {
  // state
  const [ currentSkillIndex, setCurrentSkillIndex ] = useState(0);
  const onLastIndex = currentSkillIndex === skills.length - 1;

  const handelAnimationIteration = () => {
    const rotateNext = () => {
      const nextIndex = onLastIndex ? 0 : currentSkillIndex + 1;
      setCurrentSkillIndex(nextIndex);
    };
    rotateNext();
  };

  return (
    <div className="logo-carousel">
      <h4 
        className="logo-carousel__heading"
        style={{ animation: `${ headingAnimation } ${ time * 1000 }ms ease-in-out infinite`}}
        onAnimationIteration={ handelAnimationIteration }
      >
        { skills[currentSkillIndex].name }
      </h4>
      <div 
        className="logo-carousel__image-container"
        onAnimationIteration={ handelAnimationIteration }
        style={{ animation: `${ logoAnimation } ${ time * 1000 }ms ease-in-out infinite` }}
      >
        <Image
          alt='img'
          className="logo-carousel__image"
          src={ skills[currentSkillIndex].logo.src }
          width={ 100 }
          height={ 100 }  
        />
      </div>
    </div>
  )
};

export default AnimatedImageCarousel;