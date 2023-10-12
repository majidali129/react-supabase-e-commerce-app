import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Login } from "../../services/ApiAuth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"



const useLogin = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {mutate: login, isLoading: logingInUser} = useMutation({
        mutationFn: ({email, password}) => Login(email, password),
        onSuccess: (user) => {
            toast.success(`You have Successfully loged in via ${user?.user?.email}`),
            navigate('/', {replace: true}),
            queryClient.setQueryData(['user'],user?.user )
        },
        onError: () => toast.error('Invalid user credentials')
    })

    return {login, logingInUser}
}

export default useLogin