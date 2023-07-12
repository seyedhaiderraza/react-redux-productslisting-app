import { actionTypes } from "../constants/actionTypes";

export const initialState = {
  products: [
   
  ],
};

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ADD_PRODUCTS:
      return {
        ...state,products:payload
      };

  
    default:
      return {...state};
  }
};

export const getProductReducer = (state={}, {type, payload})=>{
      switch(type){
        case actionTypes.GET_PRODUCT:
        return {
        ...state,...payload
      }
      case actionTypes.REMOVE_PRODUCT:
        return {
          
      }
      default:
      return {...state};
      }
}
