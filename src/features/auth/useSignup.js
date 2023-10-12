import { useMutation } from "@tanstack/react-query"
import { SignUp } from "../../services/ApiAuth"
import toast from "react-hot-toast"



const useSignup = () => {
    const {mutate: signUp, isLoading: creatingAccount} = useMutation({
        mutationFn: ({email, password, fullName}) => SignUp(email, password, fullName),
        onSuccess: () => toast.success('Account Successfully created. please verify new account from user\'s email'),
        onError: () => toast.error('Something went wrong while creating the account! please wait or try again ')
    })

    return {signUp, creatingAccount}
}

export default useSignup