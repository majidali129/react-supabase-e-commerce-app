
import { PAGE_SIZE } from "../utils/constants";
import { farmator } from "../utils/helpers";
import supabase from "./supabase";

export const getProducts = async (page) => {    
    let query = supabase
  .from('products')
  .select('*', {
    count: 'exact'
  });


  if(page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const {data, error, count} = await query;

  if(error) throw new Error('Supabase Error:: Products not loaded for now')
  
  return {data, count};
}


export const getProduct = async (productId) => {
    const { data, error } = await supabase
  .from('products')
  .select()
  .eq('id', productId)
  .single();

    if(error) throw new Error('API ERROR:: Products can\'t be fetched 😢');

    return data;
}
















export const upLoadProducts = async (products) => {    
    const formatedProducts = products.map(product => farmator(product))    
    const { error } = await supabase
  .from('products')
  .insert(formatedProducts);

  if(error) throw new Error(error.message);
}