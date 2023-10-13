import { useMutation, useQueryClient } from "@tanstack/react-query"
import { decreaseQuantity as decreaseQuantityApi } from "../../services/ApiCart"
import toast from "react-hot-toast"

export const useDecreaseQuantity = () => {
    const queryClient = useQueryClient()
  const {mutate: decreaseQuantity, isLoading: decreasingQuantity} = useMutation({
    mutationFn: (item) => decreaseQuantityApi(item?.id, item?.price),
    mutationKey: ['cart'],
    onSuccess: () => {
        toast.success('Quantity has been increased successfully')
        // console.log('quantity updated');

        queryClient.invalidateQueries({
            queryKey: ['cart'],
        })
    },
    onError: () => {
        toast.error('Please try again. For some reason, quantity did\'nt increased')
    }
  })

  return {decreaseQuantity, decreasingQuantity}

}

