// library
import { ElementType, FC, ReactNode } from "react";

// components
import AnimatedEntryWrapper, { AnimatedEntryWrapperStyles } from "../animated-entry-wrapper/animated-entry-wrapper";
import Link from "next/link";

// types
import { Case, Service } from "@/app/types";

type CardProps = {
  elementType?: ElementType;
  entryAnimation?: AnimatedEntryWrapperStyles;
  intersectionOptions?: IntersectionObserverInit;
  item: Case | Service;
  layout?: string | undefined;
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
        {  media }
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