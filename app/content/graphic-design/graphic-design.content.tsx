// components
import AnimatedCarousel from "@/app/components/carousel-animated/carousel-animated.component";
import Heading from "@/app/components/heading/heading.component";
//data
import { graphics } from "@/app/data";

const GraphicDesign = () => {
  return (
    <div className="graphic-design">
      <Heading size={ 4 }>Graphic Design</Heading>
      <AnimatedCarousel 
        items={ graphics }
      />
    </div>
  )
};

export default GraphicDesign;