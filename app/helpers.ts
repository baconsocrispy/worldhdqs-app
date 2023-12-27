// array helpers
export const randomFromArray = (array: any[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};  

// math helpers
export const randomDegree = () => {
  return Math.floor(Math.random() * 361);
}
export const randomPercent = () => {
  return Math.random() * 100;
};

// palette helpers
export const createHSLString = (
  hue: number, 
  saturation: number, 
  lightness: number
) => {
  return `hsl(${ hue }, ${ saturation }%, ${ lightness }%)`;
};

export const getAnalogousHSL = (hslHue: number, index: number) => {
  const analogousRight = (hslHue + 30) % 360;
  const analogousLeft = (hslHue - 30) % 360;
  const analogousColors = [ hslHue, analogousRight, analogousLeft ];

  switch (index) {
    case 0:
      return createHSLString(hslHue, 50, 50);
    case 1: 
      return createHSLString(analogousRight, 50, 50);
    case 2:
      return createHSLString(analogousLeft, 50, 50);
    default:
      return createHSLString(randomFromArray(analogousColors), randomPercent(), randomPercent());
  };
};

export const getComplementaryHSL = (hslHue: number, index: number) => {
  const oppositeHue = (hslHue + 180) % 360;
  const complementaryHues = [ hslHue, oppositeHue ];

  switch (index) {
    case 0:
      return createHSLString(hslHue, 50, 50);
    case 1:
      return createHSLString(oppositeHue, 50, 50);
    default:
      return createHSLString(randomFromArray(complementaryHues), randomPercent(), randomPercent());
  };
};

export const getMonochromaticHSL = (hslHue: number, index: number) => {
  const monochromaticHue = index === 0 ? 
    createHSLString(hslHue, 50, 50) :
    createHSLString(hslHue, randomPercent(), randomPercent())
  return monochromaticHue;
};

export const getSplitComplementaryHSL = (hslHue: number, index: number) => {
  const oppositeHue = (hslHue + 180) % 360;
  const leftHue = (oppositeHue - 30) % 360;
  const rightHue = (oppositeHue + 30) % 360;
  const splitHues = [ hslHue, leftHue, rightHue ];

  switch(index) {
    case 0:
      return createHSLString(hslHue, 50, 50);
    case 1:
      return createHSLString(leftHue, 50, 50);
    case 2:
      return createHSLString(rightHue, 50, 50);
    default:
      return createHSLString(randomFromArray(splitHues), randomPercent(), randomPercent());
  };
};

export const getTriadicHSL = (hslHue: number, index: number) => {
  const triadicRight = (hslHue + 120) % 360;
  const triadicLeft = (hslHue - 120) % 360;
  const triadicColors = [ hslHue, triadicLeft, triadicRight ];

  switch (index) {
    case 0:
      return createHSLString(hslHue, 50, 50);
    case 1: 
      return createHSLString(triadicRight, 50, 50);
    case 2:
      return createHSLString(triadicLeft, 50, 50);
    default:
      return createHSLString(randomFromArray(triadicColors), randomPercent(), randomPercent());
  };
};

  // css helpers
  export const cleanClassName = (
    element: string,
    modifier?: string,
    className?: string,
  ) => {
    const classNames = [ element ];

    modifier && classNames.push( `${ element }--${ modifier }`)
    className && classNames.push( `${ className }` )

    return classNames.join(' ');
  };

