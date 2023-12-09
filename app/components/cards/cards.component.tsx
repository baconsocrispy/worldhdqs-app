// library
import { FC, ReactNode } from "react";

// components
import Card from "../card/card.component";

// types
import { Case, Service } from "@/app/types";
import { AnimatedEntryWrapperStyles } from "../animated-entry-wrapper/animated-entry-wrapper";

type CardsProps = {
  cardEntryAnimation?: AnimatedEntryWrapperStyles;
  cardMedia?: ReactNode[];
  cardIntersectionOptions?: IntersectionObserverInit;
  cardType?: "horizontal" | "vertical";
  items: Case[] | Service[];
  layout?: "alternating" | "grid";
};

const Cards: FC<CardsProps> = ({ 
  cardEntryAnimation,
  cardIntersectionOptions,
  cardMedia,
  cardType = 'vertical',
  items, 
  layout = 'grid',
}) => {
  // reverse translateX for even numbered list items when in alternating mode
  const alternatingEntryAnimation = {
    ...cardEntryAnimation,
    translateX: cardEntryAnimation?.translateX && -cardEntryAnimation?.translateX
  };

  return (
    <ul className={ `cards cards--${ layout }`}>
      {
        items.map((item, index) => 
          <Card
            key={ item.id }
            entryAnimation={ (layout === 'alternating' && index % 2 !== 0) ? 
              alternatingEntryAnimation :
              cardEntryAnimation
            }
            intersectionOptions={ cardIntersectionOptions }
            item={ item }
            layout={ cardType }
            media={ cardMedia && cardMedia[index] }
          />
        )
      }
    </ul>
  )
};

export default Cards;