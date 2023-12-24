// library
import { FC } from "react";

// components
import Heading from "@/app/components/heading/heading.component";
import AnimatedEntryWrapper from "@/app/components/animated-entry-wrapper/animated-entry-wrapper";

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
            <AnimatedEntryWrapper 
              animationOptions={{
                opacity: '0',
                transitionDelay: 0.2,
                transitionDuration: '1s',
                transitionFunction: 'ease-in'
              }}
              index={ index }
              intersectionOptions={{ root: null, threshold: 0.1 }}
              className="randomizer__content"
              key={ index }
              style={{
                top: `${ Math.floor(Math.random() * 100)}%`,
                left: `${ Math.floor(Math.random() * 100)}%`,
              }}
              wrapperElement={ 'div' }
            >
              <p
                className="randomizer__string" 
                style={{  transform: `rotate(${ `${ Math.floor(Math.random() * 361)}deg`})`}}
              >
                { string }
              </p>
            </AnimatedEntryWrapper>
          )
        }        
      </div>
    </div>
  )
};

export default BrandVoice;