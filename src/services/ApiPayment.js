import supabase from "./supabase";

export const addPaymentInfo = async (method) => {
    const { error } = await supabase
      .from('payment-method')
      .insert(method)

      if(error) throw new Error(error.message);
}


export const getPaymentInfo = async () => {
    const {data, error} = await supabase
    .from('payment-method')
    .select();

    if(error) throw new Error(error.message)

    return data;

}
