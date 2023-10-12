import supabase from "./supabase"


export const addAddress = async (address) => { 
    const { error } = await supabase
      .from('address')
      .insert(address)
      if(error) throw new Error(error.message);
}


export const getAddress = async () => {
    const {data, error} = await supabase
    .from('address')
    .select();

    if(error) throw new Error(error.message)
    
    return data;
}

export const updateAddress = async (id, newAddress) => {
    const {error} = await supabase
    .from('address')
    .update(newAddress)
    .eq('id', id)

    if(error) throw new Error(error.message)
}