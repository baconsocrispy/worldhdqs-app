// library
import { FC } from "react";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
type FormTextAreaProps = {
  id: string;
  label?: string;
  labelClass?: string;
  name?: string;
  textAreaClass?: string;
};

const FormTextArea: FC<FormTextAreaProps> = ({
  id,
  label,
  labelClass,
  name,
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
        name={ name }
        rows={ 6 }
      />
    </>
  )
};

export default FormTextArea;