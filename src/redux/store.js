import {applyMiddleware, compose, createStore} from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'
// export const store = createStore(reducers,
//     {},
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
//     );

// compose enhancer boilerplate code
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, 
    composeEnhancer(applyMiddleware(thunk)))


    export default store;