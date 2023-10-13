import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { clearCart } from "../../services/ApiCart"

export const useOrderPaymentConfirmation = () => {
    const navigate = useNavigate();

    const {mutate: placeOrder, isLoading: placingOrder} = useMutation({
        mutationFn: clearCart,
        mutationKey: ['cart'],
        onSuccess: () => {
            toast.success('Order has been placed successfully. Thanks to come here')
            navigate('/products')
        },
        onError: () => {
            toast.error('Something went wrong while placing your order. Please try after a few minutes')
        }        
    })

    return {placeOrder, placingOrder}
}

