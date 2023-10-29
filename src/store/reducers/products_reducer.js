import {ADD_PRODUCT,GET_PRODUCTS} from '../actions/products_action'
;




export const productsReducer = (state = [{id : 1 ,title:"product 1"}] , action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            return [...action.payload];
        case ADD_PRODUCT:
            return [...state, action.payload];
        default:
            return state;
    }
};