import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCartItem } from "../../services/ApiCart"
import toast from "react-hot-toast"




export const useDeleteCartItem = () => {
    const queryClient = useQueryClient()
    
    const {mutate: deleteItem, isLoading:deletingItem} = useMutation({
        mutationFn: (id) => deleteCartItem(id),
        mutationKey: ['cart'],
        onSuccess: () => {
            toast.success('Item successfully deleted')
            queryClient.invalidateQueries({
                queryKey: ['cart']
            })
        },
        onError: () => toast.error('Item can\'t be delete for now. Try again later ')
    })

    return {deleteItem, deletingItem} 

}

