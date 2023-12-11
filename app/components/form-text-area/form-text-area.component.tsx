// library
import { FC } from "react";

// types
type FormTextAreaProps = {
  id: string;
  label?: string;
  labelClass?: string;
  textAreaClass?: string;
};

const FormTextArea: FC<FormTextAreaProps> = ({
  id,
  label,
  labelClass,
  textAreaClass
}) => {
  return (
    <>
      { label && 
        <label 
          className={ `form-text-area__label ${ labelClass ?? '' }` }
          htmlFor={ id }>
          { label }
        </label>
      }

      <textarea
        className={ `form-text-area__text-area ${ textAreaClass ?? '' }` }
        id={ id }
      />
    </>
  )
};

export default FormTextArea;