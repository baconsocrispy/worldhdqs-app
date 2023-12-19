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
        imageOptions={{
          width: '100%',
          height: '100%'
        }}
        listItems={ kingLogos } 
        type="flow-right"
      />
    </div>
  )
};

export default LogoDesign;