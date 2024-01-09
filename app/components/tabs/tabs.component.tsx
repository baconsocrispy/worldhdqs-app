// library
import { cleanClassName } from "@/app/helpers";
import { FC } from "react";

// types
type TabsProps = {
  onTabClick: Function;
  selectedIndex?: number;
  tabTitles: string[];
};

const Tabs: FC<TabsProps> = ({ 
  onTabClick, 
  selectedIndex = 0, 
  tabTitles 
}) => {
  return (
    <div className="tabs">
        {
          tabTitles.map((title, index) => 
            <div
              key={ index }
              className={ cleanClassName(
                "tabs__tab",
                selectedIndex === index ? 'selected' : undefined
              )}
              onClick={ () => onTabClick(index) }
            >
              { title }
            </div>
          )
        }
    </div>
  )
};

export default Tabs;