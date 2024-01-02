// library
import { FC } from "react";

// components
import Heading from "../heading/heading.component";
import List from "../list/list.component";
import { Link } from "@/app/types";

// types
type SiteLinksProps = {
  heading?: string;
  links: Link[];
};

const SiteLinks: FC<SiteLinksProps> = ({ heading, links }) => {
  return (
    <nav className="site-links">
      <Heading size={ 4 } >{ heading }</Heading>
      <List 
        type="vertical" 
        listItems={ links } 
        listItemType="nav-link" 
      />
    </nav>
  )
};

export default SiteLinks;