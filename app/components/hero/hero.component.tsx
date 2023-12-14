'use client'
// library
import { FC,  ReactNode,  useContext, useState } from "react";

// components
import Heading from "../heading/heading.component";
import { ThemeContext } from "@/app/contexts/theme.context";
import { HeroContent, Theme } from "@/app/types";

// types
type HeroProps = {
  content: HeroContent[];
  heading?: string;
  leadIn?: string;
  subHeading?: string;
};

const Hero: FC<HeroProps> = ({ 
  content, 
  heading, 
  leadIn, 
  subHeading 
}) => {
  // state
  const { setTheme, theme } = useContext(ThemeContext);
  const [ selectedContent, setSelectedContent ] = useState<ReactNode>(content[0].component);
  const [ selectedTheme , setSelectedTheme ] = useState<Theme | undefined>(theme);
  const [ hoverContent, setHoverContent ] = useState<ReactNode | null>(null);
  

  const handleMouseEnter = (index: number) => {
    setHoverContent(content[index].component);
    setTheme(content[index].theme);
  };

  const handleMouseLeave = () => {
    setHoverContent(null);
    setTheme(selectedTheme);
  };

  const handleSectionClick = (index: number, theme: Theme | undefined) => {
    setSelectedContent(content[index].component);
    setTheme(theme);
    console.log(theme);
    setSelectedTheme(theme);
  };

  return (
    <div className={ `hero` }>
      <div className="hero__content-container">
        { hoverContent ?? selectedContent }
        <div className="hero__text"> 
          <p className="hero__lead-in">
            { leadIn }
          </p>
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
        style={{ gridTemplateColumns: `repeat(${ 3 }, 1fr)` }}
      >
          {
            content.map((contentItem, index) => 
              <div 
                key={ index } 
                className="hover-divisions__section" 
                onMouseEnter={ () => handleMouseEnter(index) }
                onMouseLeave={ handleMouseLeave }
                onClick={ () => handleSectionClick(index, contentItem.theme) }
              />
            )
          }
      </div>
    </div>
  )
};

export default Hero;