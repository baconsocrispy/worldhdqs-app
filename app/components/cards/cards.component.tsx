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
  cardType?: string;
  items: Case[] | Service[];
  layout?: string;
};

const Cards: FC<CardsProps> = ({ 
  cardEntryAnimation,
  cardIntersectionOptions,
  cardMedia,
  cardType = 'vertical',
  items, 
  layout = 'grid',
}) => {
  return (
    <ul className={ `cards cards--${ layout }`}>
      {
        items.map((item, index) => 
          <Card
            key={ item.id }
            entryAnimation={ cardEntryAnimation }
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