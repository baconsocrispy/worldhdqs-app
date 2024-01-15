// library
import { FC } from "react";

// components
import Heading from "@/app/components/heading/heading.component";
import IntersectionObserverWrapper from "@/app/components/intersection-observer-wrapper/intersection-observer-wrapper.component";

// types
type BrandVoiceProps = {
  stringList?: string[];
};

const BrandVoice: FC<BrandVoiceProps> = ({ stringList = [] }) => {
  return (
    <div className="brand-voice">
      <Heading size={ 4 }>
        Brand Voice
      </Heading>

      <div className="randomizer">
        {
          stringList?.map((string, index) => 
            <IntersectionObserverWrapper 
              key={ index }
              className="randomizer__content fade-in"
              intersectionOptions={{ 
                intersectionObserverInit: { threshold: 0 },
                transitionDelay: 0.2 * index
              }}
              style={{
                top: `${ Math.floor(Math.random() * 100)}%`,
                left: `${ Math.floor(Math.random() * 100)}%`,
              }}
              wrapperElement={ 'div' }
            >
              <p
                className="randomizer__string" 
                style={{  
                  transform: `rotate(${ `${ Math.floor(Math.random() * 361)}deg`}) rotateZ(90deg)`
                }}
              >
                { string }
              </p>
            </IntersectionObserverWrapper>
          )
        }        
      </div>
    </div>
  )
};

export default BrandVoice;