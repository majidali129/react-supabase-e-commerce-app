import { useQuery } from "@tanstack/react-query";
import { getPaymentInfo } from "../../services/ApiPayment";

export const useGetPaymentInfo = () => {
  const { data: paymentIfon, isLoading: loadingInfo } = useQuery({
    queryFn: getPaymentInfo,
    queryKey: ["payment-info"],
  });

  return { paymentIfon, loadingInfo };
};

