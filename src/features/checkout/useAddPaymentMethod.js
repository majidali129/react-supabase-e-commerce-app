import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addPaymentInfo } from "../../services/ApiPayment"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"



export const useAddPaymentMethod = () => {
    const navigate = useNavigate()
 
    const {mutate: getPaymentMethod, isLoading: gettingPaymentMethod} = useMutation({
        mutationFn: (paymentMethod) => addPaymentInfo(paymentMethod),
        onSuccess: () => {
            toast.success('Payment method has beed varified. Please wait a moment 🧟‍♂️');
            navigate('/checkout')

        }
    })

    return {getPaymentMethod, gettingPaymentMethod}
}

