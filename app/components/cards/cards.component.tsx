// library
import { FC, ReactNode } from "react";

// components
import Card from "../card/card.component";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
import { AnimationOptions, Case, IntersectionObserverOptions, Service } from "@/app/types";

type CardsProps = {
  cardLinkText?: string;
  cardMedia?: ReactNode[];
  cardIntersectionOptions?: IntersectionObserverOptions;
  cardType?: "horizontal" | "vertical";
  items: Case[] | Service[];
  layout?: "alternating" | "grid";
};

const Cards: FC<CardsProps> = ({ 
  cardIntersectionOptions,
  cardLinkText,
  cardMedia,
  cardType = 'vertical',
  items, 
  layout = 'grid',
}) => {
  return (
    <ul className={ cleanClassName('cards', layout) }>
      {
        items.map((item, index) => 
          <Card
            key={ item.id }
            intersectionObserverOptions={ cardIntersectionOptions }
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