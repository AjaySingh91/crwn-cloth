import { addItemToCArt } from "./cart.utils";
import CartActionType from "./cart.types";
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const CartReducer =( state =INITIAL_STATE ,action) => {
    switch (action.type){
        case CartActionType.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionType.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCArt(state.cartItems ,action.payload)
            }    
        default:
            return state
    }
}

export default CartReducer