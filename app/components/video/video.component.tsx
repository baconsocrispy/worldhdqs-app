// library
import { CSSProperties, FC } from "react";

// types
type VideoProps = {
  aspectRatio?: string;
  src: string;
  style?: CSSProperties;
  type?: 'background';
};

const Video: FC<VideoProps> = ({ 
  aspectRatio = '16 / 9',
  src,
  style,
  type
}) => {
  return (
    <div 
      className={ `video video--${ type ?? '' }`}
      style={{
        aspectRatio: aspectRatio,
        ...style
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