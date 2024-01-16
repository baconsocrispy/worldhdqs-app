// library
import { ElementType, FC, ReactNode } from "react";

// components
import IntersectionObserverWrapper from "../intersection-observer-wrapper/intersection-observer-wrapper.component";
import Heading from "../heading/heading.component";
import Image from "next/image";
import Link from "../link/link.component";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
import { Case, IntersectionObserverOptions, Service } from "@/app/types";

type CardProps = {
  elementType?: ElementType;
  href?: string;
  intersectionObserverOptions?: IntersectionObserverOptions;
  item: Case | Service;
  linkText?: string;
  layout?: "horizontal" | "vertical";
  media?: ReactNode;
};

const Card: FC<CardProps> = ({ 
  elementType = 'li',
  intersectionObserverOptions,
  item, 
  layout = 'vertical' ,
  linkText,
  media
}) => {
  return (
    <IntersectionObserverWrapper 
      className={ cleanClassName(
        'card', 
        layout, 
        intersectionObserverOptions?.transitionClass
      )}
      intersectionOptions={ intersectionObserverOptions }
      key={ item.id }
      wrapperElement={ elementType }
    >
      <div className="card__media"> 
        {  media ??
            <Image
              className="card__image"
              src={ item.image ? item.image.src : '#' }
              fill
              alt={ item.title }
              style={{ borderRadius: '1rem'}}
            />
        }
      </div>
      <div className="card__text">
      <Heading size={ 3 } className="card__heading">
        { item.title }
      </Heading>

      <Heading size={ 4 } className="card__sub-heading">
        { item.highlight }
      </Heading>

      <p className="card__copy">{ item.description }</p>

      { (linkText || item.href)  &&
          <div>
            <Link 
              href={ item.href ?? '#' }
              newTab={ true }
            >
              { item.href && 'Visit Site' }
            </Link>
          </div>
      }
      </div>
    </IntersectionObserverWrapper>
  )
};

export default Card;