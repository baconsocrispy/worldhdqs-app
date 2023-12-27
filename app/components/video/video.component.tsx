// library
import { CSSProperties, FC } from "react";

// helpers
import { cleanClassName } from "@/app/helpers";

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
      className={ cleanClassName('video', type) }
      style={{
        aspectRatio: aspectRatio,
        ...style
      }}
    >
      <video 
        autoPlay={ true }
        loop 
        muted
        playsInline
        src={ src }
      />
    </div>
  )
}

export default Video