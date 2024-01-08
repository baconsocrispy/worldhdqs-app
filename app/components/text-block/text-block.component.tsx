// library
import { FC } from "react";

// components
import Video from "../video/video.component";

// types
type TextBlockProps = {
  text: string;
};

const TextBlock: FC<TextBlockProps> = ({ text }) => {
  return (
    <div className='text-block'>
      <p className="text-block__text">
        { text }
      </p>
    </div>
  )
};

export default TextBlock;