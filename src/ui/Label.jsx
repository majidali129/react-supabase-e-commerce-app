
const Label = ({children, htmlFor,className}) => {
  return (
    <label htmlFor={htmlFor} className={`text-stone-500 mb-1 ${className}`}>
           {children}
    </label>
  )
}

export default Label