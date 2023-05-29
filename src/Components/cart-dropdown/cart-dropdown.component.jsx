import React from "react";
import './cart-dropdown.style.scss'
import CustomButton from "../custom-button/custom-button.componente";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart.selector";
import { Link } from "react-router-dom";
import {toggleCartHidden} from '../../redux/cart/cart.acction'

const CartDropdown = ({cartItems ,dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                :( <span className="empty-message">Your Cart is Empty</span>)
            }
        </div>
        <Link to='/checkout'>
        <CustomButton  onClick={() => {dispatch(toggleCartHidden())}} >GO TO CHECKOUT </CustomButton>
        </Link>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItem(state)
})


export default connect(mapStateToProps)(CartDropdown)