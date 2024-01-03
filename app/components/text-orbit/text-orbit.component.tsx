'use client'
// library
import { FC, ReactNode, useEffect, useRef, useState } from "react";

// types
type OrbitingTextProps = {
  // children: ReactNode;
  debounce?: number; // number representing milliseconds
  panelCount?: number;
  text: string;
};
 // state
const OrbitingText: FC<OrbitingTextProps> = ({ debounce = 0, panelCount = 360, text }) => {

  const orbitingText = useRef<HTMLDivElement>(null);
  // apothem is the radius from the center of a regular 
  // polygon to the middle of one of its sides
  const [ apothem, setApothem ] = useState(0);
  const [ width, setWidth ] = useState(0);
  const [ panelWidth, setPanelWidth ] = useState(0);
 
  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout> | null;

    // calculate apothem for translateZ() value
    const calculateApothem = () => {
      const orbitingTextRef = orbitingText.current;

      if (orbitingTextRef) {
        const resizeObserver = new ResizeObserver(() => { 
          if (resizeTimer) clearTimeout(resizeTimer);  

          resizeTimer = setTimeout(() => {
          
            const diameter = orbitingTextRef.getBoundingClientRect().width;
            const panelWidth = (diameter * Math.PI) / panelCount;
            const currentApothem = panelWidth / (2 * Math.tan(Math.PI / panelCount));

            setPanelWidth(panelWidth);
            setApothem(currentApothem);
            setWidth(diameter);
            resizeTimer = null;
          }, debounce)
        });

        resizeObserver.observe(orbitingTextRef);

        // prevent memory leak
        return () => {
          resizeObserver.disconnect();
          if (resizeTimer) clearTimeout(resizeTimer);
        };
      };
    };
    calculateApothem();
  }, [ debounce, panelCount ]);

  const panelArray = Array.from({ length: panelCount }, (_, index) => {
    return { 
      beforeProperties:{ 
        '--content':  `"${ text}"`,
        '--font-size': `${ width * .4 }px`,
        '--left':`${ panelWidth * -index }px`
      },
      rotateY: ((360 / panelCount) * index).toString(),
      translateZ: apothem,
      width: panelWidth
    }
  });

  return (
    <div 
      className="orbiting-text"
      ref={ orbitingText }
    >
      <div className="orbiting-text__panels">
        {
          panelArray.map((panel, index) => 
            <div 
              key={ index}
              className="orbiting-text__panel"
              style={{ 
                transform: `
                  rotateY(${ panel.rotateY }deg) 
                  translate(-25%, -25%) 
                  translateZ(${ apothem }px)
                `,
                width: panelWidth,
                ...panel.beforeProperties
              }}
            />
          )
        }
      </div>
      <div className="orbiting-text__child"></div>
    </div>
  )
};

export default OrbitingText;