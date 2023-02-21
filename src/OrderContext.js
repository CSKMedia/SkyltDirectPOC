import React, { useState, useContext, createContext } from "react";

const OrderContext = createContext();
const OrderUpdateContext = createContext();


export const useOrder = () => {
  return useContext(OrderContext);
}

export const useOrderUpdate = () => {
  return useContext(OrderUpdateContext);
}

export const OrderProvider = ({children}) => {

  const [Order, setOrder] = useState([]);

  return (
    <OrderContext.Provider value={Order}>
      <OrderUpdateContext.Provider value={setOrder}>
      {children}
      </OrderUpdateContext.Provider>
    </OrderContext.Provider>
  )
}
