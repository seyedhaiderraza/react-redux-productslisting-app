import fakeStoreApi from "../../apis/fakeStoreApi";
import { actionTypes } from "../constants/actionTypes"


export const asyncFetchSingleProduct = (productId)=>{
    return async (dispatch)=>{
        const response = await fakeStoreApi.get(`/products/${productId}`)
   
        dispatch({
            type: actionTypes.FETCH_ASYNC_SINGLE_PRODUCT,
            payload:await response.data
        })
    }
}


export const asyncFetchProducts=()=>{

    return async(dispatch)=>{
        const response = await fakeStoreApi.get("/products");
       
    dispatch( {
        type: actionTypes.FETCH_ASYNC_PRODUCTS,
        payload:await response.data,
    })
    }

}


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