// library
import { FC } from "react";

// components
import EntryAnimation from "../entry-animation/entry-animation.component";
import Image from "next/image";
import Link from "next/link";

// types
import { Case, Service } from "@/app/types";

type CardProps = {
  item: Case | Service;
  layout?: string | undefined; 
};

const Card: FC<CardProps> = ({ item, layout = 'vertical' }) => {
  return (
    <li 
      key={ item.id }
      className={ `card card--${ layout }` }
    >
        <div className="card__image-container"> 
          <Image 
            className="card__image"
            src='/1x/bg1.png'
            fill
            alt='bg1'
          />
        </div>
        <div className="card__text">
          <h3 className="card__heading">{ item.name }</h3>
          <p className="card__sub-heading">{ item.description }</p>
        </div>
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