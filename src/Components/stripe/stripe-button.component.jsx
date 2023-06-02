import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51NCxs6SGtPld9bvG2N2e9ylmMqBeVHUE21RWpnDGrQbehYhjfRqKVMquHPr652aK5g3Hum7otxrxI7MKbABRnMJS00sma6iaX9'

const onToken = token => {
    console.log(token);
    alert('Payment Done')
}

    return(
        <StripeCheckout 
        
        label="Pay Now"
        name="CRWN Clothing Pvt. Ltd."
        billingAddress
        shippingAddress
        // image="../../../public/logo192.png"
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