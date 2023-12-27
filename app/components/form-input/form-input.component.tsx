// library
import { FC } from "react";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
type FormInputProps = {
  id: string;
  inputClass?: string;
  label?: string;
  labelClass?: string;
  type?: string; 
};

const FormInput: FC<FormInputProps> = ({ 
  id, 
  inputClass,
  label, 
  labelClass,
  type = 'text' 
}) => {
  return (
    <>
      { label && 
        <label 
          className={ cleanClassName('form-input__label', undefined, labelClass) }
          htmlFor={ id }
        >
          { label }
        </label>
      }

      <input 
        className={ cleanClassName('form-input__input', undefined, inputClass) }
        id={ id } 
        type={ type } 
      />
    </>
  )
};

export default FormInput;