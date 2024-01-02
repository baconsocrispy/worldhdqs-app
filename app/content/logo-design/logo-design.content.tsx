// components
import Heading from "@/app/components/heading/heading.component";
import List from "@/app/components/list/list.component";

// data
import { kingLogos } from "@/app/data";

const LogoDesign = () => {
  return (
    <div className="logo-design">
      <Heading size={ 4 }>
        Logo Design & Analysis
      </Heading>
      <List 
        intersectionOptions={{ 
          intersectionObserverInit: { threshold: 0.5 }, 
          transitionClass: 'fade-in-alternate'
        }}
        listItems={ kingLogos }
        listItemType="nav-link"
        type="nav"
      />
    </div>
  )
};

export default LogoDesign;