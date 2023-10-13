import { useMutation, useQueryClient } from "@tanstack/react-query"
import { clearCart as clearCartApi } from "../../services/ApiCart"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"




export const useClearCart = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    
    const {mutate: clearCart, isLoading:clearingCart} = useMutation({
        mutationFn: clearCartApi,
        mutationKey: ['cart'],
        onSuccess: () => {
            toast.success('Order has been placed successfully')
            queryClient.invalidateQueries({
                queryKey: ['cart']
            })
            navigate('/products')
        },
        onError: () => toast.error('Order can\'t be place for now . please try again after some time')
    })

    return {clearCart, clearingCart} 

}

