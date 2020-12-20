import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from 'components/CheckoutForm';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
import 'styles/CheckPage.scss';
import AppContext from 'AppContext';
import { useContext } from 'react';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckPage = () => {
  const {
    cart
  } = useContext(AppContext);

  const total = cart.reduce((a, val) => a + val.count * Number(val), 0) * 1.13;
  return (
    <div className='checkout-layout'>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>

    </div>
  );
};

export default CheckPage;