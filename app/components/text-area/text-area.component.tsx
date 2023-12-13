'use client'
import { ThemeContext } from "@/app/contexts/theme.context";
// library
import { FC, useContext } from "react";

// types
type TextAreaProps = {
  text: string;
};

const TextArea: FC<TextAreaProps> = ({ text }) => {
  // state
  const { theme } = useContext(ThemeContext);

  return (
    <div className={ `text-area ${ theme?.className ?? '' }`}>
      <p className="text-area__text">
        { text }
      </p>
    </div>
  )
};

export default TextArea;