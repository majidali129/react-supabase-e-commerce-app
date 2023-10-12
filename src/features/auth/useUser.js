import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "../../services/ApiAuth"


export const useUser = () => {
    const {data: user, isLoading: isLoadingUser} = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentUser, 
    })
    return {user, isLoadingUser, isAuthenticated: user?.role === 'authenticated'}
}