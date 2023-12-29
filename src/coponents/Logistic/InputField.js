import React from 'react';
import { ErrorMessage, useField } from 'formik';
function InputField({  ...props }) {
    const [field, meta] = useField(props);
  return (
    <div>
      




    <div className="mb-2">
      
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  

    </div>
  );
}

export default InputField;
