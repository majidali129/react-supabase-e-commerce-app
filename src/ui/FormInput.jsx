import React from "react"


// eslint-disable-next-line react/display-name
const FormInput = React.forwardRef(({type,id,name,placeholder,disabled,className, ...props}, ref) => {
  return (
    <input
    type={type}
    id={id}
    placeholder={placeholder}
    disabled={disabled}
    name={name}
    {...props}
    ref={ref}
    className={`bg-white py-2 px-4 rounded-md text-stone-600 focus:ring-2 border-none outline-none focus:ring-stone-300 disabled:bg-stone-200 form-input drop-shadow-lg ${className}`}
  />
  )
});

FormInput.displayName = 'FormInput'
export default FormInput