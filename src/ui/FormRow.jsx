import Label from "./Label";

const FormRow = ({label,error,className, children}) => {
  
  return (
    <div className={`flex md:w-[80%] w-full mx-auto ${className}`}>
      {label && <Label htmlFor={children?.props?.id} >{label}</Label>}
      {children}
      {error && <p className="w-full py-2 px-3 text-red-500 ">{error}</p>}
    </div>
  );
};

export default FormRow;
