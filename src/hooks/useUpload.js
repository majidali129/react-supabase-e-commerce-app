import { useMutation } from "@tanstack/react-query"
import { upLoadProducts } from "../services/ApiProducts"



export const useUpload = () => {
  
    const {mutate: uploader, isLoading: insertingProducts, error} = useMutation({
        mutationFn: (products) =>  upLoadProducts(products),
        mutationKey: ['products'],
        onSuccess: () => alert('Products has been inserted'),
        onError: () => alert('Something went wrong while uploading the products')
        // onError: () => alert(error)
    })

    return {uploader, insertingProducts}
}

