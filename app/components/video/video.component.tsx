// library
import { FC } from "react";

// types
type VideoProps = {
  aspectRatio?: string;
  src: string;
  type?: 'background';
};

const Video: FC<VideoProps> = ({ 
  aspectRatio = '16 / 9',
  src,
  type
}) => {
  return (
    <div 
      className={ `video video--${ type ?? '' }`}
      style={{
        aspectRatio: aspectRatio
      }}
    >
      <video 
        autoPlay={ true }
        loop 
        muted
        src={ src }
      />
    </div>
  )
}

export default Video