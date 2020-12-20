import React from 'react';
import useAppData from 'hooks/useAppData';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const {
    item,
    clickItemHandle,
    cart,
    addCart,
    removeCart
  } = useAppData();
  return (
    <AppContext.Provider value={{
      item,
      clickItemHandle,
      cart,
      addCart,
      removeCart
    }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;