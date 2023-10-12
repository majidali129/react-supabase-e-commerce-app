
export const farmator = (product) => {
    return {
        ...product,
        tag_list: JSON.stringify(product.tag_list),
        product_colors: JSON.stringify(product.product_colors),
    }
}