import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../../../Components/CheckOutForm/CheckOutForm';
import Sslcmz from '../../../Components/Sslcmz/Sslcmz';

const stripePromise=loadStripe(import.meta.env.VITE_payment_gateway_pk)
const Payment = () => {
    return (
        <div>
           <div>
              <SectionTitle heading='Payment' subHeading="pay to eat"></SectionTitle>
           </div>
           {/* stripe----------------- */}
           <div>
              <Elements stripe={stripePromise}>
                 <CheckOutForm></CheckOutForm>
              </Elements>
           </div>
               <div className="divider divider-secondary">or</div>

            {/* sslcommerz---------------- */}
           <div>
               <Sslcmz></Sslcmz>
           </div>
        </div>
    );
};

export default Payment;