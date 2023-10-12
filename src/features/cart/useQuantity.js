import { useMutation, useQueryClient } from "@tanstack/react-query"
import { decreaseQuantity, increaseQuantity } from "../../services/ApiCart"
import toast from "react-hot-toast"

export const useQuantity = () => {
    const queryClient = useQueryClient()
    function checkUpdation (item,change) {
        if(change === 'increase') increaseQuantity(item.id, item.price)
        if(change === 'decrease') decreaseQuantity(item?.id, item?.price)
    }
  const {mutate: updateQuantity, isLoading: updatingQuantity} = useMutation({
    mutationFn: ({item, changeInfo}) => checkUpdation(item, changeInfo),
    mutationKey: ['cart'],
    onSuccess: () => {
        toast.success('Quantity has been updated')
        console.log('quantity updated');

        queryClient.invalidateQueries({
            queryKey: ['cart'],
        })
        queryClient.refetchQueries

    },
    onError: () => {
        toast.error('Please try again. For some reason, quantity did\'nt updated')
    }
  })

  return {updateQuantity, updatingQuantity}

}

