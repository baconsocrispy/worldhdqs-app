'use client'
// library
import { FC, useRef } from "react";

// components
import IntersectionObserverWrapper from "../intersection-observer-wrapper/intersection-observer-wrapper.component";
import ListItem from "../list-item/list-item.component";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
import { IntersectionObserverOptions, ListItem as ListItemType } from "@/app/types";

type ListProps = {
  animationTarget?: 'ul' | 'li'; 
  intersectionOptions?: IntersectionObserverOptions;
  intersectionTarget?: 'ul' | 'li';
  listItems?: ListItemType[];
  listItemType?: 'grid' | 'link' | 'nav-link';
  type?: 'horizontal' | 'link' | 'nav' | 'vertical';
};

const List: FC<ListProps> = ({
  animationTarget = 'li',
  intersectionOptions,
  intersectionTarget = 'ul',
  listItems = [],
  listItemType = 'grid',
  type = 'vertical'
}) => {
  // create ref of outer ul to pass to li when using ul for intersection target
  const ulRef = useRef<HTMLElement | null>(null);

  return (
    <IntersectionObserverWrapper
      className={ cleanClassName(
        'list', 
        type, 
        animationTarget === 'ul' ?
          intersectionOptions?.transitionClass :
          undefined
      )}
      intersectionOptions={{ 
        intersectionObserverInit: intersectionTarget === 'ul' ? 
          intersectionOptions?.intersectionObserverInit : 
          undefined 
      }}
      ref={ ulRef }
      wrapperElement={ 'ul' }
    >
      { listItems.map((item, index) => 
        <ListItem
          key={ index }
          intersectionObserverOptions={{
            intersectionObserverInit: intersectionOptions?.intersectionObserverInit,
            intersectionTarget: intersectionTarget === 'ul' ?
              ulRef : undefined,
            transitionClass: animationTarget === 'li' ?
              intersectionOptions?.transitionClass : undefined,
            transitionDelay: intersectionOptions?.transitionDelay ? 
              intersectionOptions.transitionDelay * index : undefined
          }}
          item={ item }
          type={ listItemType }
        />
      )}
    </IntersectionObserverWrapper>
  )
};

export default List;