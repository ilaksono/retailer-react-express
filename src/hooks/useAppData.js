import { useState } from 'react';

const initItem = {
  url: '',
  name: '',
  priceCents: 0,
  id: 0,
};
const initCart = [];
const useAppData = () => {
  const [item, setItem] = useState('');
  const [cart, setCart] = useState(initCart);
  const clickItemHandle = (item) => {
    setItem(item);
  };
  const addCart = (item, count) => {
    const index = cart.findIndex(each => each.id === item.id);
    if (!(index >= 0))
      setCart(prev => ([...prev, { ...item, count, desc:'It\'s a toy'}]));
    else {
      const cpy = [...item];
      cpy[index].count = count;
      setCart(cpy);

    }
  };
  const removeCart = (item) => {
    const cpy = [...cart];
    const ind = cart.findIndex(each => 
      each.id === item.id);
    cpy.splice(ind, 1);
    setCart(cpy);
  };

  return {
    item,
    clickItemHandle,
    cart,
    addCart,
    removeCart
  };
};
export default useAppData;