import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getProducts } from "../../services/ApiProducts"
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";


export const useProducts = () => {
    const [searchParams] = useSearchParams();
    const queryClient = useQueryClient()

    // PAGENATION
    const page = !searchParams.get('page')? 1: Number(searchParams.get('page'))

    const {data: {data: products, count} = {}, 
        isLoading} = useQuery({
        
        queryFn: () => getProducts(page),
        queryKey: ['products', page],
    });

    // PRE-FETCHING
    const pageCount = Math.ceil(count/PAGE_SIZE);

    // next-page
    if(page < pageCount){
        queryClient.prefetchQuery({
            queryFn: () => getProducts(page + 1),
            queryKey: ['products', page+1],
        })
    }

    // previous page
    if(page > 1){
        queryClient.prefetchQuery({
            queryFn: () => getProducts(page - 1),
            queryKey: ['products', page - 1],
        })
    }    

    return {products, isLoading, count}
}