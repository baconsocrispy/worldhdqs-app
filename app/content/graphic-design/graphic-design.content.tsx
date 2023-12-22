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
        imageAnimation="fadeInOut"
        items={ graphics }
        time={ 2 }
      />
    </div>
  )
};

export default GraphicDesign;