// library
import { FC, MutableRefObject } from "react";

// components
import AnimatedEntryWrapper from "../animated-entry-wrapper/animated-entry-wrapper";
import Heading from "../heading/heading.component";
import Image from "next/image";
import Link from "../link/link.component";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
import { AnimationOptions, ListItem } from "@/app/types";

type ListItemProps = {
  animationOptions?: AnimationOptions;
  className?: string;
  imageOptions?: {
    width?: string;
    height?: string;
  };
  index?: number;
  intersectionOptions?: IntersectionObserverInit;
  intersectionTarget?: MutableRefObject<HTMLElement | null>;
  item: ListItem;
  type?: string;
};

const ListItem: FC<ListItemProps> = ({
  animationOptions,
  className,
  imageOptions = {
    width: '100px',
    height: '100px'
  },
  index,
  intersectionOptions,
  intersectionTarget,
  item,
  type
}) => {
  return (
    <AnimatedEntryWrapper
      animationOptions={ animationOptions }
      className={ cleanClassName('list__item', type) } 
      index={ index }
      intersectionOptions={ intersectionOptions }
      intersectionTarget={ intersectionTarget }
      wrapperElement={ 'li' }
    > 
      { item.image &&  
          <div 
            className="list__image-container"
            style={{
              height: `${ imageOptions.height }`,
              width: `${ imageOptions.width }`
            }}
          >
            <Image 
              className="list__image"
              src={ item.image.src }
              fill
              objectFit="contain"
              alt="item"
            />
          </div>
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
    </AnimatedEntryWrapper>
  )
};

export default ListItem;