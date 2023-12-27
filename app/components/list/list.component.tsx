'use client'
// library
import { FC, useRef } from "react";

// components
import AnimatedEntryWrapper from "../animated-entry-wrapper/animated-entry-wrapper";
import ListItem from "../list-item/list-item.component";

// types
import { AnimationOptions, ListItem as ListItemType } from "@/app/types";
import { cleanClassName } from "@/app/helpers";

type ListProps = {
  animationOptions?: AnimationOptions;
  animationTarget?: 'ul' | 'li'; 
  className?: string;
  id?: string | number;
  intersectionOptions?: IntersectionObserverInit;
  intersectionTarget?: 'ul' | 'li';
  listItems?: ListItemType[];
  type?: 'horizontal' | 'link' | 'nav' | 'vertical';
};

const List: FC<ListProps> = ({ 
  animationOptions,
  animationTarget = 'li',
  className, 
  id,
  intersectionOptions,
  intersectionTarget = 'ul',
  listItems = [], 
  type = 'vertical'
}) => {
  // create ref of outer ul to pass to li when using ul for intersection target
  const ulRef = useRef<HTMLElement | null>(null);

  return (
    <AnimatedEntryWrapper
      animationOptions={ animationTarget === 'ul' ? animationOptions : undefined }
      className={ cleanClassName('list', type, className) }
      id={ id }
      intersectionOptions={ intersectionTarget === 'ul' ? intersectionOptions : undefined }
      ref={ ulRef }
      wrapperElement={ 'ul' }
    >
      { listItems.map((item, index) => 
        <ListItem
          animationOptions={ animationTarget === 'li' ? animationOptions : undefined}
          index={ index }
          intersectionOptions={ intersectionOptions }
          intersectionTarget={ intersectionTarget === 'ul' ? ulRef : undefined }
          item={ item }
          key={ index }
          type={ type }
        />
      )}
    </AnimatedEntryWrapper>
  )
};

export default List;