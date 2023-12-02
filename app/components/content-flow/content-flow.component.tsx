// library
import { FC } from "react";

// types
import { Skill } from '@/app/types';

type ContentFlowProps = {
  content: Skill[];
  direction?: string;
};

const ContentFlow: FC<ContentFlowProps> = ({ 
  content, direction = 'left' 
}) => {
  return (
    <div className="content-flow">
      <ul className={ `content-flow__list content-flow__list--${ direction }`}>
        {
          content.map((item) => 
            <li 
              key={ item.id }
              className={ `content-flow__item content-flow__item--${ direction }`}
            >
              { item.name }
            </li>
          )
        }
      </ul>
      <ul className={ `content-flow__list content-flow__list--${ direction }`}>
        {
          content.map((item) => 
            <li 
              key={ item.id }
              className="content-flow__item"
            >
              { item.name }
            </li>
          )
        }
      </ul>
    </div>
    
  )
};

export default ContentFlow;