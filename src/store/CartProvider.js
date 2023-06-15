import { useState, useMemo, useEffect } from "react";

import CartContext from "./cart-context";
import axios from "axios";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const totalAmount = useMemo(
    () =>
      items.reduce(
        (prev, currentValue) =>
          prev + currentValue?.price * currentValue?.quantity,
        0
      ),
    [items]
  );
useEffect(()=>{
  crudcrudToCntx();
},[])
  const crudcrudToCntx = async() => {
const response = await axios.get('https://crudcrud.com/api/7e7b57dc0aeb45afa77ee7357b6b3549/cart')
setItems(response.data);
  }

  const addItemToCartHandler = (item) => {
    const itemIndex = items.findIndex((el) => el.id === item.id);
    if (itemIndex === -1) {
      axios.post('https://crudcrud.com/api/7e7b57dc0aeb45afa77ee7357b6b3549/cart',item)
      .then((res)=>{
        crudcrudToCntx();
      })
      return;
    }

    const updatedItems = items.map((el) => {
      if (el.id === item.id) {
        return {
          ...item,
          quantity: Number(item.quantity) + Number(el.quantity),
        };
      }
      return el;
    });
    setItems(updatedItems);
  };

  const removeItemFromCartHandler = (id) => {
    const filterItems = items
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Number(item.quantity) - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity >= 1);
    setItems(filterItems);
  };

  const cartContext = {
    items: items,
    totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
