import './checkout.style.scss'
import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItem ,selectCartTotal} from '../../redux/cart/cart.selector'
import CheckoutItem from '../../Components/checkout-ittem/checkout-item.component'
import StripeCheckoutButton from '../../Components/stripe/stripe-button.component'

const CheckoutPage = ({cartItems, total}) =>(
    <div>   
<div className="checkout-page">
    <div className="checkout-header">
        <div className="header-block">
            <span>Product</span>
        </div>
        <div className="header-block">
            <span>Description</span>
        </div>
        <div className="header-block">
            <span>Quantity</span>
        </div>
        <div className="header-block">
            <span>Price</span>
        </div>
        <div className="header-block">
            <span>Remove</span>
        </div>
    </div>

{
    cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))
}

<div className="total"><span>TOTAL: ${total}</span></div>
<StripeCheckoutButton price={total}/>
</div>
</div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);