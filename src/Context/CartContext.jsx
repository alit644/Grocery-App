/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(
    CartReducer,
    JSON.parse(localStorage.getItem("cart")) || []
  );

  //! استخدام useEffect لتخزين الحالة في localStorage كلما تغيرت
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
