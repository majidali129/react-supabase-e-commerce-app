import { useQuery } from "@tanstack/react-query"
import { getProduct } from "../../services/ApiProducts"


export const useProduct = (id) => {
    const {data: product, isLoading} = useQuery({
        queryKey: ['product-info', id],
        queryFn: () => getProduct(id),
    });

    return {product, isLoading}
}