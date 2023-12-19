// library
import { FC, ReactNode } from "react";

// components
import Card from "../card/card.component";

// types
import { AnimationOptions, Case, Service } from "@/app/types";

type CardsProps = {
  cardAnimationOptions?: AnimationOptions;
  cardLinkText?: string;
  cardMedia?: ReactNode[];
  cardIntersectionOptions?: IntersectionObserverInit;
  cardType?: "horizontal" | "vertical";
  items: Case[] | Service[];
  layout?: "alternating" | "grid";
};

const Cards: FC<CardsProps> = ({ 
  cardAnimationOptions,
  cardIntersectionOptions,
  cardLinkText,
  cardMedia,
  cardType = 'vertical',
  items, 
  layout = 'grid',
}) => {
  // reverse translateX for even numbered list items when in alternating mode
  const alternatingEntryAnimation: AnimationOptions = {
    ...cardAnimationOptions,
    translateX: cardAnimationOptions?.translateX && -cardAnimationOptions?.translateX
  };

  return (
    <ul className={ `cards cards--${ layout }`}>
      {
        items.map((item, index) => 
          <Card
            key={ item.id }
            animationOptions={ (layout === 'alternating' && index % 2 !== 0) ? 
              alternatingEntryAnimation :
              cardAnimationOptions
            }
            intersectionOptions={ cardIntersectionOptions }
            item={ item }
            layout={ cardType }
            linkText={ cardLinkText }
            media={ cardMedia && cardMedia[index] }
          />
        )
      }
    </ul>
  )
};

export default Cards;