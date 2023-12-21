// library
import { FC } from "react";

// helpers
import { getAnalogousHSL, getComplementaryHSL, getMonochromaticHSL, getSplitComplementaryHSL, getTriadicHSL } from "@/app/helpers";

// types
type PaletteProps = {
  baseColor: number;
  harmony?: 'analogous' | 'complementary' | 'monochromatic'| 'split' | 'triadic';
  colorCount?: number;
};

const Palette: FC<PaletteProps> = ({ 
  baseColor, // hsl color
  harmony = 'complementary', 
  colorCount = 5
}) => {
  // create an array of HSL colors based on harmony scheme
  const colorArray = Array.from({ length: colorCount }, (_, index) => {
    switch (harmony) {
      case 'analogous':
        return getAnalogousHSL(baseColor, index)
      case 'complementary':
        return getComplementaryHSL(baseColor, index);
      case 'monochromatic':
        return getMonochromaticHSL(baseColor, index);
      case 'split':
        return getSplitComplementaryHSL(baseColor, index)
      case 'triadic':
        return getTriadicHSL(baseColor, index)
      default:
        return getComplementaryHSL(baseColor, index)
    }
  });

  return (
    <div className="palette">
      {
        colorArray.map((color, index) => 
          <div key={ index } className="palette__color-container">
            <div 
              className="palette__color"
              style={{
                backgroundColor: color
              }}
            />
          </div>
        )
      }
    </div>
  )
};

export default Palette;