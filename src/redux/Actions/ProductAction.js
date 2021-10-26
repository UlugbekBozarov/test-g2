export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export function UpdateProduct(newProduct) {
    return {
        type: UPDATE_PRODUCT,
        payload: {
            user: newProduct
        }
    }
}