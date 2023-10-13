import { useNavigate } from "react-router-dom"

const BackButton = ({children}) => {
    const navigate = useNavigate()
    
  return (
    <button 
    onClick={() => navigate(-1, {replace: true})}
    className="px-6 py-1 text-yellow-900 cursor-pointer ring-1 ring-stone-400"
    >
       {children}
    </button>
  )
}

export default BackButton