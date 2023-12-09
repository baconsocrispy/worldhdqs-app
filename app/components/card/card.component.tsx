// library
import { ElementType, FC, ReactNode } from "react";

// components
import AnimatedEntryWrapper, { AnimatedEntryWrapperStyles } from "../animated-entry-wrapper/animated-entry-wrapper";
import Image from "next/image";
import Link from "../link/link.component";

// types
import { Case, Service } from "@/app/types";
import Heading from "../heading/heading.component";

type CardProps = {
  elementType?: ElementType;
  entryAnimation?: AnimatedEntryWrapperStyles;
  intersectionOptions?: IntersectionObserverInit;
  item: Case | Service;
  layout?: "horizontal" | "vertical";
  media?: ReactNode;
};

const Card: FC<CardProps> = ({ 
  elementType = 'li',
  entryAnimation,
  intersectionOptions,
  item, 
  layout = 'vertical' ,
  media
}) => {
  return (
    <AnimatedEntryWrapper 
      key={ item.id }
      className={ `card card--${ layout }` }
      intersectionOptions={ intersectionOptions }
      styleOptions={ entryAnimation }
      wrapperElement={ elementType }
    >
      <div className="card__media"> 
        {  media ??
            <Image
              className="card__image"
              src={ item.image ? item.image.src : '#' }
              fill
              alt={ item.name }
            />
        }
      </div>
      
      <Heading size={ 3 } className="card__heading">
        { item.name }
      </Heading>
      <Heading size={ 4 } className="card__sub-heading">
        { item.description }
      </Heading>
      <p className="card__copy">{ item.description }</p>

      <Link 
        href="#"
      >
        Learn More
      </Link>
    </AnimatedEntryWrapper>
  )
};

export default Card;