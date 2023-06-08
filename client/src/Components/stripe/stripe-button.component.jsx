import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51NCxs6SGtPld9bvG2N2e9ylmMqBeVHUE21RWpnDGrQbehYhjfRqKVMquHPr652aK5g3Hum7otxrxI7MKbABRnMJS00sma6iaX9'

const onToken = token => {
    axios({
        url: 'payment',
        method: 'post',
        data: {
            amount: priceForStripe ,
            token
        }
    }).then(response => {
        alert('payment SUccEssFUL')
    }).catch(error => {
        // console.log('paymnet ErrOR', JSON.parse(error));
        alert('there was a error in your payment, please use provided credit card')
    })
}

    return(
        <StripeCheckout 
        
        label="Pay Now"
        name="CRWN Clothing Pvt. Ltd."
        billingAddress
        shippingAddress
        image="https://media.istockphoto.com/id/1193230490/vector/vintage-crown-hand-draw-graphic.jpg?s=1024x1024&w=is&k=20&c=RSRcbSOcRIJGYSuXGMeffC5o56SpZLmM0a5BmZt90tY="
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={ onToken}
        stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton;