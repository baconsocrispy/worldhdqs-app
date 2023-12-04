// library
import { FC } from "react";

// components
import Card from "../card/card.component";

// types
import { Case, Service } from "@/app/types";
import { EntryAnimationStyles } from "../entry-animation/entry-animation.component";

type CardsProps = {
  cardEntryAnimation?: EntryAnimationStyles;
  cardIntersectionOptions?: IntersectionObserverInit;
  cardType?: string;
  items: Case[] | Service[];
  layout?: string;
};

const Cards: FC<CardsProps> = ({ 
  cardEntryAnimation,
  cardIntersectionOptions,
  cardType = 'vertical',
  items, 
  layout = 'grid', 

}) => {
  return (
    <ul className={ `cards cards--${ layout }`}>
      {
        items.map((item) => 
          <Card
            key={ item.id }
            entryAnimation={ cardEntryAnimation }
            intersectionOptions={ cardIntersectionOptions }
            item={ item }
            layout={ cardType }
          />
        )
      }
    </ul>
  )
};

export default Cards;