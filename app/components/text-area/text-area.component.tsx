// library
import { FC } from "react";

// types
type TextAreaProps = {
  text: string;
}
const TextArea: FC<TextAreaProps> = ({ text }) => {
  return (
    <div className="text-area">
      <p className="text-area__text">
        { text }
      </p>
    </div>
  )
};

export default TextArea;