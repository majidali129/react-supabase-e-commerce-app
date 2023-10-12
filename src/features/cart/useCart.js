import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "../../services/ApiCart";

const useCart = () => {
  const { data: cartItems, isLoading: loadingCart } = useQuery({
    queryFn: getCartItems,
    queryKey: ["cart"],
  });

  return { cartItems, loadingCart };
};

export default useCart;
