import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addProductToCart } from "../../services/ApiCart"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


const useAddCartItem = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

  const {mutate: addProduct, isLoading: addingProduct} = useMutation(({
    mutationFn: (product) => addProductToCart(product, product?.id),
    mutationKey: ['cart'],
    onSuccess: () => {
        toast.success('Product has been added to your cart')
        queryClient.invalidateQueries({
            queryKey: ['cart']
        });
        navigate('/cart')
    },
    onError: () =>{
        toast.error('Product can\'t be added to cart for now. Try again after some time')
    } 
  }))

  return {addProduct, addingProduct}
}

export default useAddCartItem