import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addAddress as addAddressApi} from "../../services/ApiAddress"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"



const useAddAddress = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {mutate: addAddress, isLoading: addingAddress } = useMutation({
        mutationFn: (address) => {            
            addAddressApi(address)
        }
            ,
        onSuccess: (address) => {
            toast.success('Address has been saved. Please move ahead')
            queryClient.setQueryData(['user-address', address]),
            navigate('/payment-method')
        },
        onError: () => toast.error('Something went wrong while adding your address. Please try again')

    })

    return {addAddress, addingAddress}
}

export default useAddAddress