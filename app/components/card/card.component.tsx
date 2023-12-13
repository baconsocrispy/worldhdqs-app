'use client'
// library
import { ElementType, FC, ReactNode, useContext } from "react";

// components
import AnimatedEntryWrapper, { AnimatedEntryWrapperStyles } from "../animated-entry-wrapper/animated-entry-wrapper";
import Heading from "../heading/heading.component";
import Image from "next/image";
import Link from "../link/link.component";

// context
import { ThemeContext } from "@/app/contexts/theme.context";

// types
import { Case, Service } from "@/app/types";



type CardProps = {
  elementType?: ElementType;
  entryAnimation?: AnimatedEntryWrapperStyles;
  href?: string;
  intersectionOptions?: IntersectionObserverInit;
  item: Case | Service;
  linkText?: string;
  layout?: "horizontal" | "vertical";
  media?: ReactNode;
};

const Card: FC<CardProps> = ({ 
  elementType = 'li',
  entryAnimation,
  href,
  intersectionOptions,
  item, 
  layout = 'vertical' ,
  linkText,
  media
}) => {
  // state
  const { theme } = useContext(ThemeContext);

  return (
    <AnimatedEntryWrapper 
      key={ item.id }
      className={ `card card--${ layout } ${ theme?.className }` }
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
      
      <Heading size={ 3 } className={ `card__heading`}>
        { item.name }
      </Heading>

      <Heading size={ 4 } className="card__sub-heading">
        { item.description }
      </Heading>

      <p className="card__copy">{ item.description }</p>

      { (linkText || href)  &&
          <div>
            <Link 
              href={ href ?? '#' }
            >
              { linkText }
            </Link>
          </div>
      }
    </AnimatedEntryWrapper>
  )
};

export default Card;