import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useCart from "../../Hook/useCart"
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState()
    const [transactionId, setTransactionId] = useState()
    const { user } = useAuth()
    const stripe = useStripe()
    const element = useElements()
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !element) {
            return
        }
        const card = element.getElement(CardElement)

        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log("payment error", error)
            setError(error.message)
        } else {
            console.log(paymentMethod)
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonymous"
                }
            }


        })
        if (confirmError) {
            console.log(confirmError)
        } else {
            if (paymentIntent.status === "succeeded") {
                console.log("paymentIntent=>", paymentIntent)
                setTransactionId(paymentIntent.id)
            }
        }

        // payment save to database-----------
        const payment = {
            email: user.email,
            price: totalPrice,
            date: new Date(),//TODO:convert to utc time by using moment js
            cartIds: cart.map(item => item._id),
            itemIds: cart.map(item => item.itemId),
            status: "pending"
        }
        const res = await axiosSecure.post("/payment", payment)
        refetch();
        if (res.data?.paymentResult?.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post("/create-payment-intent", { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [axiosSecure, totalPrice])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret} className="my-4 btn btn-primary">
                    Pay
                </button>
                <p className="text-red-500">{error}</p>
                {transactionId && <p className="text-green-600">Your transaction id:{transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckOutForm;