import BasicTable from 'components/Table';
import AppContext from 'AppContext';
import { useContext, useState } from 'react';
import 'styles/CartPage.scss'
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
    </div>
  );
};
export default CartPage;