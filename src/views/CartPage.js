import BasicTable from 'components/Table';
import AppContext from 'AppContext';
import { useContext, useState } from 'react';
import 'styles/CartPage.scss';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const CartPage = () => {
  const {
    cart
  } = useContext(AppContext);
  return (
    <div className='cart-layout'>
      <h1>Shopping Cart</h1>
      <div className='table-container'>
        <BasicTable data={cart} />
      </div>
      <Link to='/checkout'>
        <Button color='yellow'>Checkout</Button>
      </Link>
    </div>
  );
};
export default CartPage;