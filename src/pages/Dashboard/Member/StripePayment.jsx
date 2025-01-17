import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
export default function StripePayment() {
    return (
        <Elements stripe={stripePromise} >
            <CheckoutForm />
        </Elements>
    )
}
