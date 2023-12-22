// library
import { FC } from "react";

// types
type VideoProps = {
  aspectRatio?: string;
  src: string;
};

const Video: FC<VideoProps> = ({ 
  aspectRatio = '16 / 9',
  src 
}) => {
  return (
    <div 
      className='video'
      style={{
        aspectRatio: aspectRatio
      }}
    >
      <video 
        autoPlay
        loop 
        src={ src }
      />
    </div>
  )
}

export default Video