// library
import { FC } from "react";

// components
import Card from "../card/card.component";

// types
import { Service } from "@/app/types";

type CardsProps = {
  items: Service[];
};

const Cards: FC<CardsProps> = ({ items }) => {
  return (
    <ul className="services__list">
      {
        items.map((item) => 
          <Card key={ item.id } item={ item } />
        )
      }
    </ul>
  )
};

export default Cards;