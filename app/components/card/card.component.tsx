// library
import { FC } from "react";

// components
import Link from "next/link";

// types
import { Case, Service } from "@/app/types";

type CardProps = {
  item: Case | Service;
};

const Card: FC<CardProps> = ({ item }) => {
  return (
    <li 
      key={ item.id }
      className="card"
    >
      <h3 className="card__header">{ item.name }</h3>
      <p className="card__text">{ item.description }</p>
      <Link 
        href="#"
        className="card__link"
      >
        Learn More
      </Link>
    </li>
  )
};

export default Card;