import { useMutation } from "@tanstack/react-query"
import { handlePaymentOrder } from "../../services/ApiPayment"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useOrderPaymentConfirmation = () => {
    const navigate = useNavigate();

    const {mutate: placeOrder, isLoading: placingOrder} = useMutation({
        mutationFn: handlePaymentOrder,
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

