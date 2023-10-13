import { useNavigate } from "react-router-dom"
import { useUser } from "../features/auth/useUser"
import { useEffect } from "react"
import Spinner from "./Spinner"

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
    // 1) Load the user from DB
    const {isLoadingUser, isAuthenticated } = useUser()
    // 2) check if user not authenticated, redirect to login page
    useEffect(() => {
        if(!isLoadingUser && !isAuthenticated) navigate('/login');
    }, [isLoadingUser, isAuthenticated, navigate])
    // 3) if authenticated, show loading state for user 
    // if(isLoadingUser) return <Spinner />
    // 4) render childs if status is success
 if(isAuthenticated) return (
    children
  )
}

export default ProtectedRoute