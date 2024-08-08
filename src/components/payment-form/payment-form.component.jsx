import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotalPrice } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/Button.component";
import { BUTTON_TYPES } from "../button/Button.component";
import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles";


const convertDollarToCents = (dollar) => {
    return dollar * 100;
}

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const totalPrice = useSelector(selectCartTotalPrice);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(Boolean);

    const paymentHandler = async (event) => {
        console.log('entering the paymenthandler!!');
        event.preventDefault();

        // if the hooks are loaded, then only do something
        if (!stripe || !elements) {
            console.log('not loaded stripe or elements')
            return;
        }

        setIsProcessingPayment(true);

        //create stripe payment intent with a netflify serverless function
        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: convertDollarToCents(totalPrice)})

        }).then(res => res.json());
        console.log(response);

        const {paymentIntent: {client_secret}} = response;
        console.log(client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser: 'Guest'
                }
            }
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            console.log('errored');
            console.log(paymentResult.error);
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('payment succeeded');
            }
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <PaymentButton 
                    isLoading={isProcessingPayment}
                    buttonType={BUTTON_TYPES.inverted} 
                > Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
}

export default PaymentForm;