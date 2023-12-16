// library
import { FC } from "react";

// components
import AnimatedEntryWrapper, { AnimatedEntryWrapperStyles } from "../animated-entry-wrapper/animated-entry-wrapper";
import Image from "next/image";

// types
import { ListItem, SerializedImage } from "@/app/types";
import Heading from "../heading/heading.component";

type ListProps = {
  className?: string;
  entryAnimation?: AnimatedEntryWrapperStyles;
  heading?: string;
  id?: string | number;
  intersectionOptions?: IntersectionObserverInit;
  listitems: ListItem[];
  text?: string;
  type?: 'drop'
};

const List: FC<ListProps> = ({ 
  className, 
  entryAnimation,
  id, 
  intersectionOptions,
  listitems, 
  type = 'drop' 
}) => {
  const transitionDelay = entryAnimation?.transitionDelay ?? 0;

  return (
    <AnimatedEntryWrapper 
      className={ `list list--${ type } ${ className ?? '' }`}
      id={ id }
      intersectionOptions={ intersectionOptions }
      styleOptions={ entryAnimation }
      wrapperElement={ 'ul' }
    >
      { listitems.map((item, index) => 
        <li 
          className={ `list__item` } 
          key={ index } 
          style={{ 
            transitionDelay: (transitionDelay * index).toString() + 's', 
            zIndex: listitems.length - index
          }}
        >
          { item.image &&  
              <Image 
                className="list__image"
                src={ item.image.src }
                width={ 100 }
                height={ 100 }
                alt="item"
              />
          }

          <Heading className="list__item-highlight" size={ 4 }>
            { item.textHighlight }
          </Heading>

          <p className="list__item-text">
            { item.text }
          </p>
        </li>
      )}
    </AnimatedEntryWrapper>
  )
};

export default List;