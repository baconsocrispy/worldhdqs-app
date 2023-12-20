'use client'
// library
import { FC, useRef } from "react";

// components
import AnimatedEntryWrapper from "../animated-entry-wrapper/animated-entry-wrapper";
import Heading from "../heading/heading.component";
import Image from "next/image";
import Link from "../link/link.component";

// types
import { AnimationOptions, ListItem } from "@/app/types";

type ListProps = {
  animationOptions?: AnimationOptions;
  animationTarget?: 'ul' | 'li'; 
  className?: string;
  id?: string | number;
  imageOptions?: {
    width?: string;
    height?: string;
  };
  intersectionOptions?: IntersectionObserverInit;
  intersectionTarget?: 'ul' | 'li';
  listItems?: ListItem[];
  type?: 'drop' | 'flow-right' | 'horizontal' | 'link' | 'nav' | 'vertical';
};

const List: FC<ListProps> = ({ 
  animationOptions,
  animationTarget = 'li',
  className, 
  id, 
  imageOptions = {
    width: '100px',
    height: '100px'
  },
  intersectionOptions,
  intersectionTarget = 'ul',
  listItems = [], 
  type = 'vertical'
}) => {
  const ulRef = useRef<HTMLElement | null>(null);

  return (
    <AnimatedEntryWrapper
      animationOptions={ animationTarget === 'ul' ? animationOptions : undefined }
      className={ 
        `list list--${ type } ${ className ?? '' }`
      }
      id={ id }
      intersectionOptions={ intersectionTarget === 'ul' ? intersectionOptions : undefined }
      ref={ ulRef }
      wrapperElement={ 'ul' }
    >
      { listItems.map((item, index) => 
        <AnimatedEntryWrapper 
          animationOptions={ animationTarget === 'li' ? animationOptions : undefined }
          intersectionOptions={ intersectionOptions }
          intersectionTarget={ intersectionTarget === 'ul' ? ulRef : undefined }
          className={ `list__item list__item--${ type }` } 
          index={ index }
          key={ index } 
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
      )}
    </AnimatedEntryWrapper>
  )
};

export default List;