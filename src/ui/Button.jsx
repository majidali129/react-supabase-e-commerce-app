import { Link } from "react-router-dom";

const Button = ({ children, disabled, onClick,type='button', to, variation, className }) => {

  const variations = {
    primary : `py-2 px-6 bg-yellow-900 hover:bg-yellow-950 transition-all duration-300 ease-in-out text-yellow-50 rounded-md flex items-center ring-2 ring-yellow-800 justify-center gap-2 cursor-pointer disabled:cursor-wait disabled:bg-stone-200 w-fit ${className}  ` ,

    secondary: `py-2 px-6 flex items-center justify-center gap-x-4 border-none ring-2 ring-stone-300 rounded-md bg-stone-200 text-stone-700 shadow-md font-semibold  cursor-pointer disabled:cursor-wait ${className}`,

    small: 'rounded-full bg-stone-700 text-stone-50 hover:bg-stone-600 ring-2 ring-stone-600 hover:ring-stone-700 md:w-10 md:h-10 w-6 h-6  cursor-pointer disabled:cursor-wait disabled:bg-stone-200 disabled:text-stone-800',

    danger : `py-2 px-6 bg-red-600 hover:bg-red-700 transition-all duration-300 ease-in-out text-text-red-50 rounded-md flex items-center ring-2 ring-red-300 justify-center gap-2 cursor-pointer disabled:cursor-wait w-fit ${className}`,

    normal: `rounded-full bg-yellow-200 text-yellow-950 font-semibold block w-fit py-2 px-6 ring-2 ring-yellow-400 ${className}
      
    `
  }

  



  if(to) return(
    <Link to={to} className="tracking-wide text-yellow-900" >
    {children}
    </Link>
  )


  return (
    <button
    onClick={onClick}
    type={type}
    className={variations[variation]}
    disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
