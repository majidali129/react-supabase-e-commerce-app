import { useQuery } from "@tanstack/react-query";
import { getAddress } from "../../services/ApiAddress";

export const useGetAddress = () => {
  const { data: shippingAddress, isLoading: loadingAddress } = useQuery({
    queryFn: getAddress,
    queryKey: ['address']
  });  

  return { shippingAddress, loadingAddress };
};

