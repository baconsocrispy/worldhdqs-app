// library
import { FC } from "react";

// types
import { Service } from "@/app/types";

type CardProps = {
  item: Service;
};

const Card: FC<CardProps> = ({ item }) => {
  return (
    <li 
      key={ item.id }
      className="services__item"
    >
      <h3>{ item.name }</h3>
      <p>{ item.description }</p>
    </li>
  )
};

export default Card;