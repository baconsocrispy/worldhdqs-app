// library
import { FC } from "react";

// components
import AnimatedEntryWrapper, { AnimatedEntryWrapperStyles } from "../animated-entry-wrapper/animated-entry-wrapper";
import Heading from "../heading/heading.component";
import Image from "next/image";

// types
import { ListItem } from "@/app/types";
import Link from "../link/link.component";

type ListProps = {
  className?: string;
  entryAnimation?: AnimatedEntryWrapperStyles;
  heading?: string;
  id?: string | number;
  intersectionOptions?: IntersectionObserverInit;
  listItems?: ListItem[];
  text?: string;
  type?: 'drop' | 'link' | 'nav';
};

const List: FC<ListProps> = ({ 
  className, 
  entryAnimation,
  id, 
  intersectionOptions,
  listItems = [], 
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
      { listItems.map((item, index) => 
        <li 
          className={ `list__item list__item--${ type }` } 
          key={ index } 
          style={{ 
            transitionDelay: (transitionDelay * index).toString() + 's', 
            zIndex: listItems.length - index
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

          { item.textHighlight &&
              <Heading className="list__item-highlight" size={ 4 }>
                { item.textHighlight }
              </Heading>
          }

          { type === 'nav' || type === 'link' ?
              <Link 
                href={ item.href ?? '#' }
                type={ type === 'nav' ? 'nav' : 'default' }
              >
                { item.text }
              </Link> :

              <p className="list__item-text">
                { item.text }
              </p>
          }
        </li>
      )}
    </AnimatedEntryWrapper>
  )
};

export default List;