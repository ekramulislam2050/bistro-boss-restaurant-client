import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../../../Components/CheckOutForm/CheckOutForm';

const stripePromise=loadStripe(import.meta.env.VITE_payment_gateway_pk)
const Payment = () => {
    return (
        <div>
           <div>
              <SectionTitle heading='Payment' subHeading="pay to eat"></SectionTitle>
           </div>
           <div>
              <Elements stripe={stripePromise}>
                 <CheckOutForm></CheckOutForm>
              </Elements>
           </div>
        </div>
    );
};

export default Payment;