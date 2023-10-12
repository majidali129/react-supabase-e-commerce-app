import { useNavigate } from "react-router-dom"

const BackButton = ({children}) => {
    const navigate = useNavigate()
    
  return (
    <button 
    onClick={() => navigate(-1, {replace: true})}
    className="text-yellow-900 cursor-pointer ring-1 ring-stone-400 py-1 px-6"
    >
       {children}
    </button>
  )
}

export default BackButton