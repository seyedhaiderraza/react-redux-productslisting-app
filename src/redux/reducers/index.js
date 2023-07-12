import {combineReducers} from 'redux';
import {getProductReducer, productReducer} from './productReducer'

const reducers = combineReducers({
    allProducts: productReducer,
    product: getProductReducer
})

export default reducers