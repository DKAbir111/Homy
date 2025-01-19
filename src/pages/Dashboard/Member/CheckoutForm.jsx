import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState("");
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const navigate = useNavigate()
    // Safely retrieve rent amount from state
    let { state } = useLocation();
    const initialRent = state?.info?.rent || 0;
    const [finalRent, setFinalRent] = useState(initialRent);
    useEffect(() => {
        if (finalRent > 0) {
            axiosSecure
                .post("/create-payment-intent", { price: finalRent })
                .then((res) => setClientSecret(res.data.clientSecret))
                .catch((err) => {
                    console.log(err)
                    Swal.fire("Error", "Failed to create payment intent.", "error")
                }
                );
        }
    }, [axiosSecure, finalRent]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        // Validate finalRent
        if (finalRent <= 0) {
            Swal.fire("Error", "Invalid payment amount.", "error");
            return;
        }

        // Show confirmation pop-up before proceeding
        Swal.fire({
            title: `Are you sure you want to pay $${finalRent.toFixed(2)}?`,
            text: "This amount will be deducted from your account.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Proceed",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#ff6725",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { error } = await stripe.createPaymentMethod({
                    type: "card",
                    card,
                });

                if (error) {
                    console.error("[Error]", error);
                    Swal.fire("Error", error.message, "error");
                    return;
                }

                const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                    clientSecret,
                    {
                        payment_method: {
                            card,
                            billing_details: {
                                email: user?.email || "anonymous",
                                name: user?.displayName || "anonymous",
                            },
                        },
                    }
                );

                if (confirmError) {
                    console.error("Payment Confirmation Error:", confirmError);
                    Swal.fire("Error", confirmError.message, "error");
                    return;
                }

                if (paymentIntent?.status === "succeeded") {
                    const paymentInfo = {
                        email: user?.email,
                        rent: state?.info?.rent,
                        totalPaid: finalRent,
                        transactionId: paymentIntent.id,
                        paymentDate: new Date(),
                        name: user?.name,
                        apartmentNo: state?.info?.apartmentNo,
                        blockName: state?.info?.blockName,
                        floorNo: state?.info?.floorNo,
                        apartmentId: state?.info?.apartmentId,
                        discount: discount,
                        month: state?.month
                    };

                    axiosSecure.post("/payment", paymentInfo).then((res) => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Payment Successful!",
                                icon: "success",
                                confirmButtonColor: "#ff6725",
                                html: `
                                    <p>Your payment has been processed successfully.</p>
                                    <p style="color:red;text-align:center; padding:5px"><b>Transaction ID:</b> ${paymentIntent.id}</p>
                                    <p>Thank you for your purchase!</p>
                                `,
                                confirmButtonText: "OK",
                            });
                            navigate('/dashboard/payment-history')
                        }
                    });
                }
            }
        });
    };

    const applyCoupon = () => {
        axiosSecure
            .post("/validate-coupon", { couponCode: coupon })
            .then((res) => {
                if (res.data.isValid) {
                    const discountPercentage = parseInt(res.data.discountPercentage, 10);
                    const discountedRent =
                        initialRent - (initialRent * discountPercentage) / 100;
                    setDiscount(discountPercentage);
                    setFinalRent(discountedRent);
                    Swal.fire(
                        "Success!",
                        `Coupon applied! ${discountPercentage}% off.`,
                        "success"
                    );
                } else {
                    Swal.fire("Invalid Coupon", "Please try a valid coupon code.", "error");
                }
            })
            .catch(() =>
                Swal.fire("Error", "Failed to apply coupon. Please try again.", "error")
            );
    };

    return (
        <section className="flex min-h-screen justify-center items-center">
            <div className="bg-gray-50 py-10 px-6 md:px-16 rounded-lg shadow-md max-w-lg mx-auto">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Complete Your Payment
                </h2>
                <p className="text-gray-500 mb-6">
                    Please provide your payment details to complete the transaction.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#424770",
                                        "::placeholder": {
                                            color: "#aab7c4",
                                        },
                                    },
                                    invalid: {
                                        color: "#9e2146",
                                    },
                                },
                            }}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">
                            Coupon Code
                        </label>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                className="flex-1 p-2 border rounded"
                                placeholder="Enter coupon code"
                            />
                            <button
                                type="button"
                                onClick={applyCoupon}
                                className={`px-4 btn bg-primary-color text-white rounded hover:bg-orange-600 ${discount && 'btn-disabled'}`}
                            >
                                Apply
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-medium">
                            Final Rent:{" "}
                            <span className="text-primary-color">
                                ${finalRent.toFixed(2)}
                            </span>
                        </h3>
                        <h4 className="text-sm text-gray-500">
                            Discount Applied: {discount}%
                        </h4>
                    </div>
                    <button
                        type="submit"
                        disabled={!stripe || !clientSecret}
                        className="w-full py-3 px-6 bg-primary-color text-white font-semibold rounded-lg hover:bg-primary-dark transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Pay ${finalRent.toFixed(2)}
                    </button>
                </form>
            </div>
        </section>
    );
}
