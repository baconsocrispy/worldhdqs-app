// library
import { ComponentPropsWithoutRef, FC } from "react";

// helpers
import { cleanClassName } from "@/app/helpers";

// types
interface FormTextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  label?: string;
  labelClass?: string;
  labelId?: string;
};

const FormTextArea: FC<FormTextAreaProps> = ({
  label,
  labelClass,
  labelId,
  ...textAreaProps
}) => {
  return (
    <>
      { label && 
        <label 
          className={ cleanClassName('form-text-area__label', undefined, labelClass) }
          htmlFor={ labelId }
        >
          { label }
        </label>
      }

      <textarea { ...textAreaProps } />
    </>
  )
};

export default FormTextArea;