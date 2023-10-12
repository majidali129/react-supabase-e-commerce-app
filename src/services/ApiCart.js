import { GiThorFist } from "react-icons/gi"
import supabase from "./supabase"

export const addProductToCart = async (product) => {
    const { error } = await supabase
  .from('cart')
  .insert(product)

  if(error) throw new Error(error.message)
}


export const updateCartItem = async ( id, price) => {

  const {data, error:fetchError} = await supabase
  .from('cart')
  .select('*')
  .eq('id', id)
  .single();
  if(fetchError) throw new Error(fetchError.message)

  if(!data || data.quantity === undefined) throw new Error('Item not found in the cart');
  
  const newQuantity = data?.quantity + 1;
  const newTotalPrice = price * newQuantity;
    
const { error: updationError } = await supabase
.from('cart')
.update({ quantity: newQuantity, total_price: newTotalPrice })
.eq('id', id);

if(updationError) throw new Error(updationError.message)
}

export const increaseQuantity = async (itemId, itemPrice) => {
  
  const {data:item, error: quantityUpadateError} = await supabase
  .from('cart')
  .select('quantity')
  .eq('id', itemId)
  .single()

  if(quantityUpadateError) throw new Error(quantityUpadateError.message);
  
  const increasedQuantity = item?.quantity + 1;
  const increasedTotalPrice = itemPrice * increasedQuantity ;

  const { error: quantityUpdationError } = await supabase
.from('cart')
.update({ quantity: increasedQuantity, total_price: increasedTotalPrice })
.eq('id', itemId);

if(quantityUpdationError) throw new Error(quantityUpdationError.message)
}


export const decreaseQuantity = async (itemId, itemPrice) => {
  
  const {data: item, error: quantityUpadateError} = await supabase
  .from('cart')
  .select('*')
  .eq('id', itemId)
  .single()

  if(quantityUpadateError) throw new Error(quantityUpadateError.message);
  
  if(item?.quantity > 1) {

    const decreasedQuantity = item?.quantity -1 ;
    const decreasedTotalPrice = item?.total_price - itemPrice ;
    
    const { error: quantityUpdationError } = await supabase
    .from('cart')
    .update({ quantity: decreasedQuantity, total_price: decreasedTotalPrice })
    .eq('id', itemId); 
    if(quantityUpdationError) throw new Error(quantityUpdationError.message)
  }else{

    const { error } = await supabase
    .from('cart')
    .delete()
    .eq('id', itemId)

    if(error) throw new Error(error.message)
  }

}



export const getCartItems = async () => {
    const {data, error} = await supabase.from('cart').select('*');
    if(error) throw new Error(error.message)

    return data
}