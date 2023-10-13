import supabase from "./supabase"


export const getCartItems = async () => {
  const {data, error} = await supabase.from('cart').select('*');
  if(error) throw new Error(error.message)

  return data
}


export const addProductToCart = async (newProduct, id) => {
  const cart = await getCartItems();
  // console.log(cart);
  const existingItem = cart.find(item => item.id === id)
  if(existingItem){
    const newQuantity = existingItem.quantity + 1;
    const newTotalPrice = newProduct.price * newQuantity;

    const {error} = await supabase
    .from('cart')
    .update({...newProduct, quantity: newQuantity, total_price: newTotalPrice})
    .eq('id', id)

    if(error) throw new Error(`Update Error:: ${error.message}`);

  }else{
    const {error} = await supabase
    .from('cart')
    .insert([{...newProduct}]);

    if(error) throw new Error(`Inser Error:: ${error.message}`)
  }



}



export const increaseQuantity = async (itemId, itemPrice) => {

  const cart = await getCartItems();
  // console.log(cart);
  const existingItem = cart.find(item => item.id === itemId)
  if(existingItem){
    const newQuantity = existingItem.quantity + 1;
    const newTotalPrice = itemPrice * newQuantity;

    const {error} = await supabase
    .from('cart')
    .update({quantity: newQuantity, total_price: newTotalPrice})
    .eq('id', itemId)

    if(error) throw new Error(`Update Error:: ${error.message}`);

  }

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



export const deleteCartItem = async (itemId) => {
  const { error } = await supabase
  .from('cart')
  .delete()
  .eq('id', itemId)

  if(error) throw new Error(error.message)
}

export const clearCart = async () => {
  const {error} = await supabase
  .from('cart')
  .delete()
  .neq('id', 0);
  
  if(error) throw new Error(`ClearCart Error:: ${error.message}`)
}