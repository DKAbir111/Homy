import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
export default function StripePayment() {
    let { state } = useLocation();
    console.log(state)
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}
