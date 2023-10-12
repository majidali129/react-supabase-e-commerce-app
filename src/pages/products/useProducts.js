import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../../services/ApiProducts"

export const useProducts = () => {

    const {data: products, isLoading} = useQuery({
        queryFn: getProducts,
        queryKey: ['all-products']
    })


    return {products, isLoading}

}