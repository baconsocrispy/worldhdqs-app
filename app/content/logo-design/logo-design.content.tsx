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
        animationOptions={{
          opacity: '0',
          translateX: -50,
          transitionDuration: '2s',
          transitionFunction: 'ease-in'
        }}
        intersectionOptions={{ threshold: 0.5 }}
        imageOptions={{
          height: '100%',
          width: '100%',
        }}
        listItems={ kingLogos } 
        type="horizontal"
      />
    </div>
  )
};

export default LogoDesign;