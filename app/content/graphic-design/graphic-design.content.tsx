// components
import AnimatedCarousel from "@/app/components/carousel-animated/carousel-animated.component";
import Heading from "@/app/components/heading/heading.component";
//data
import { graphics } from "@/app/data/graphics.data";

const GraphicDesign = () => {
  return (
    <div className="graphic-design">
      <Heading size={ 4 }>Graphic Design</Heading>
      <AnimatedCarousel 
        items={ graphics.map((image) => {
          return {
            id: image.id,
            images: [ image ]
          }
        })}
      />
    </div>
  )
};

export default GraphicDesign;