// library
import { FC } from "react";

// helpers
import { cleanClassName } from "@/app/helpers";

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
          className={ cleanClassName('form-text-area__label', undefined, labelClass) }
          htmlFor={ id }>
          { label }
        </label>
      }

      <textarea
        className={ cleanClassName('form-text-area__text-area', undefined, textAreaClass) }
        id={ id }
      />
    </>
  )
};

export default FormTextArea;