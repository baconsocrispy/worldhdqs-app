// library
import { FC } from "react";

// components
import Card from "../card/card.component";

// types
import { Case, Service } from "@/app/types";

type CardsProps = {
  cardType?: string;
  items: Case[] | Service[];
  layout?: string;
};

const Cards: FC<CardsProps> = ({ 
  items, layout = 'grid', cardType = 'vertical' 
}) => {
  return (
    <ul className={ `cards cards--${ layout }`}>
      {
        items.map((item) => 
          <Card 
            key={ item.id } 
            item={ item }
            layout={ cardType }
          />
        )
      }
    </ul>
  )
};

export default Cards;