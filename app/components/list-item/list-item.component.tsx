// library
import { FC } from "react";

// components
import IntersectionObserverWrapper from "../intersection-observer-wrapper/intersection-observer-wrapper.component";
import Heading from "../heading/heading.component";
import Image from "next/image";
import Link from "../link/link.component";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
import { IntersectionObserverOptions, ListItem } from "@/app/types";

type ListItemProps = {
  imageOptions?: {
    width?: string;
    height?: string;
  };
  intersectionObserverOptions?: IntersectionObserverOptions;
  item: ListItem;
  type?: 'grid' | 'link' | 'nav-link';
};

const ListItem: FC<ListItemProps> = ({
  imageOptions = {
    width: '100px',
    height: '100px'
  },
  intersectionObserverOptions,
  item,
  type
}) => {
  return (
    <IntersectionObserverWrapper
      className={ cleanClassName(
        'list-item', 
        type, 
        intersectionObserverOptions?.transitionClass
      )} 
      intersectionOptions={ intersectionObserverOptions }
      wrapperElement={ 'li' }
    > 
      { item.image &&  
          <div 
            className="list-item__image-container"
            style={{
              height: `${ imageOptions.height }`,
              width: `${ imageOptions.width }`
            }}
          >
            <Image 
              className="list-item__image"
              src={ item.image.src }
              fill
              alt="item"
            />
          </div>
      }

      { item.textHighlight &&
          <Heading className="list-item__item-highlight" size={ 4 }>
            { item.textHighlight }
          </Heading>
      }

      { type === 'nav-link' || type === 'link' ?
          <Link 
            href={ item.href ?? '#' }
            type={ type === 'nav-link' ? 'nav' : 'default' }
          >
            { item.text }
          </Link> :

          <p className="list-item__text">
            { item.text }
          </p>
      }
    </IntersectionObserverWrapper>
  )
};

export default ListItem;