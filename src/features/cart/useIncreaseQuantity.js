import { useMutation, useQueryClient } from "@tanstack/react-query"
import { increaseQuantity as increaseQuantityApi } from "../../services/ApiCart"
import toast from "react-hot-toast"

export const useIncreaseQuantity = () => {
    const queryClient = useQueryClient()
  const {mutate: increaseQuantity, isLoading: increasingQuantity} = useMutation({
    mutationFn: (item) => increaseQuantityApi(item?.id, item?.price),
    mutationKey: ['cart'],
    onSuccess: () => {
        toast.success('Quantity has been decreases successfully')
        // console.log('quantity updated');

        queryClient.invalidateQueries({
            queryKey: ['cart'],
        })
    },
    onError: () => {
        toast.error('Please try again. For some reason, quantity did\'nt decreased')
    }
  })

  return {increaseQuantity, increasingQuantity}

}

