// library
import { ElementType, FC } from "react";

// components
import AnimatedEntryWrapper, { AnimatedEntryWrapperStyles } from "../animated-entry-wrapper/animated-entry-wrapper";
import AnimatedImageCarousel from "../animated-image-carousel/animated-image-carousel.component";
import Link from "next/link";

// types
import { Case, Service } from "@/app/types";
import { skills } from "@/app/data";

type CardProps = {
  elementType?: ElementType;
  entryAnimation?: AnimatedEntryWrapperStyles;
  intersectionOptions?: IntersectionObserverInit;
  item: Case | Service;
  layout?: string | undefined;
};

const Card: FC<CardProps> = ({ 
  elementType = 'li',
  entryAnimation,
  intersectionOptions,
  item, 
  layout = 'vertical' 
}) => {
  return (
    <AnimatedEntryWrapper 
      key={ item.id }
      className={ `card card--${ layout }` }
      intersectionOptions={ intersectionOptions }
      styleOptions={ entryAnimation }
      wrapperElement={ elementType }
    >
      <div className="card__image-container"> 
        <AnimatedImageCarousel 
          headingAnimation="whizLeftToRight"
          logoAnimation='whizRightToLeft'
          skills={ skills } 
          time={ 4 }
        />
      </div>
      <div className="card__text">
        <h3 className="card__heading">{ item.name }</h3>
        <p className="card__sub-heading">{ item.description }</p>
      </div>
      <Link 
        href="#"
        className="card__link"
      >
        Learn More
      </Link>
    </AnimatedEntryWrapper>
  )
};

export default Card;