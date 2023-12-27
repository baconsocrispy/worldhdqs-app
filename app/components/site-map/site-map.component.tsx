// components
import Heading from "../heading/heading.component";
import List from "../list/list.component";

// data
import { navLinks } from "@/app/data";

const SiteMap = () => {
  return (
    <nav className="site-map">
      <Heading size={ 4 } >Navigate</Heading>
      <List type="nav" listItems={ navLinks } />
    </nav>
  )
};

export default SiteMap;