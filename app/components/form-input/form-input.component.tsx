// library
import { FC } from "react";

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
          className={ `form-input__label ${ labelClass ?? '' }`}
          htmlFor={ id }
        >
          { label }
        </label>
      }

      <input 
        className={ `form-input__input ${ inputClass ?? '' }`}
        id={ id } 
        type={ type } 
      />
    </>
  )
};

export default FormInput;