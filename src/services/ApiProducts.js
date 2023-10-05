
import config from "../config/config"

const {makeupApiUrl} = config;

export const getProducts = async () => {    
    const response = await fetch(`${makeupApiUrl}/products.json`);
    // console.log(response);
    
    if(!response.ok) throw new Error('API ERROR:: Products can\'t be fetched 😢')
    const data = await response.json();

    return data
}