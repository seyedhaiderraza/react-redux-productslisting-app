import { actionTypes } from "../constants/actionTypes"

export const addProducts = (products)=>{
    return {
        type: actionTypes.ADD_PRODUCTS,
        payload: products,
    }
}

export const getProduct = (product)=>{
    return {
        type: actionTypes.GET_PRODUCT,
        payload: product,
    }
}
export const removeProduct = () =>{
    return {
        type: actionTypes.REMOVE_PRODUCT
    }
}