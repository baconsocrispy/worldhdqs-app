// library
import { ComponentPropsWithoutRef, FC } from "react";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
interface FormInputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  labelClass?: string;
  labelId?: string;
};

const FormInput: FC<FormInputProps> = ({ 
  label, 
  labelClass,
  labelId,
  ...inputProps
}) => {
  return (
    <>
      { label && 
        <label 
          className={ cleanClassName('form-input__label', undefined, labelClass) }
          htmlFor={ labelId }
        >
          { label }
        </label>
      }

      <input { ...inputProps } />
    </>
  )
};

export default FormInput;