import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addProductToCart } from "../../services/ApiCart"
import { updateCartItem } from "../../services/ApiCart"
import useCart from "./useCart"
import toast from "react-hot-toast"


const useAddCartItem = () => {
    const {cartItems,} = useCart()
    const queryClient = useQueryClient()

    function addOrUpdate (product) {
        const existingItem = cartItems.find(item => item?.id === product?.id);
        if(existingItem){
            updateCartItem(product?.id, product?.price)
        }else{
            addProductToCart(product)
        }
    }

  const {mutate: addProduct, isLoading: addingProduct} = useMutation(({
    mutationFn: (product) => addOrUpdate(product),
    mutationKey: ['cart'],
    onSuccess: () => {
        toast.success('Item has been added to cart')
        queryClient.invalidateQueries({
            queryKey: ['cart']
        })
    },
    onError: () =>{
        toast.error('Item can\'t be added to cart for now. Try again after some time')
        // console.log('Item can\'t be added to cart for now. Try again after some time');
    } 
  }))

  return {addProduct, addingProduct}
}

export default useAddCartItem