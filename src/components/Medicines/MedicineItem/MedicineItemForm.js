import React, { useContext } from "react";
import classes from "./MedicineItemForm.module.css";
import CartContext from "../../../store/cart-context";
import CandyContext from "../../../store/medicine-context";

const MealItemForm = (props) => {
  const cartCntx = useContext(CartContext);
  const MedicineCtx = useContext(CandyContext);

  let stockAvailability = true;
  let AddToBill = 'Add to Bill';
  
// console.log(props);
  const addItemToCart = (event) => {
    event.preventDefault();
    const item = {
      crId:props.crId,
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      quantity: 1,
      availableQuantity:props.availableQuantity
    };
    MedicineCtx.reduceAvailableQuantity(item)
    MedicineCtx.items.map((ele)=>{
      if(ele.id === item.id){
        if(Number(ele.availableQuantity)>0){
          cartCntx.addItem(item);
        }
        else{
          stockAvailability=false;
          return
        }
      }
    })
    if (!stockAvailability){

    }
    

    
  };
 



  return (
    <form className={classes.form}>
      
      <button className={`form ${!stockAvailability ? 'invalid' :''}`} onClick={addItemToCart}>Add to Bill</button>
      
    </form>
  );
};

export default MealItemForm;
