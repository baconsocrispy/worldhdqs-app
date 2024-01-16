'use client'
// library
import { useEffect, useState } from "react";

// helpers
import { createHSLString, randomDegree } from "@/app/helpers";

// components
import Heading from "@/app/components/heading/heading.component";
import Palette from "@/app/components/palette/palette.component";

const ColorAnalysis = () => {
  const [ baseHSLColor, setBaseColor ] = useState(randomDegree());

  useEffect(() => {
    const changeBaseColor = () => {
      setBaseColor(randomDegree());
    };
    const interval = setInterval(changeBaseColor, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="color-analysis"
    >
      <Heading 
        size={ 4 }
        style={{ 
          color:  createHSLString(baseHSLColor, 50, 50) 
        }}
      >
        Color Scheming
      </Heading>
      <Palette 
        baseColor={ baseHSLColor } 
        harmony="complementary" 
      />
      <Palette 
        baseColor={ baseHSLColor } 
        harmony="monochromatic"
      />
      <Palette 
        baseColor={ baseHSLColor } 
        harmony="analogous"
      />
      <Palette 
        baseColor={ baseHSLColor } 
        harmony="split"
      />
      <Palette 
        baseColor={ baseHSLColor } 
        harmony="triadic"
      />
    </div>
  )
};

export default ColorAnalysis;