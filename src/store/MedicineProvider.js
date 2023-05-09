import { useState } from "react";

import MedicineContext from "./medicine-context";

const MedicineProvider = (props) => {


  const [items, setItems] = useState([]);
  //
  


  const addCandyToList = (item) => {
    const newItemList=[...items,item]
    setItems(newItemList);

};
const reduceCandyQuantityFromList=(item) => {
  
  const filteredItems = items
  .map((medicine) => {
    if (medicine.id === item.id) {
      if(Number(medicine.availableQuantity)>1){
          console.log(item.availableQuantity);
              return { ...item, availableQuantity: Number(item.availableQuantity) - 1 };
      }
      else{
        return { ...item, availableQuantity:'Out of Stock',stockAvailability:false};
      }
            
  }
  return item;

  })
  console.log(filteredItems)
  setItems(filteredItems);
  // console.log(item);
  // const filterItems = items
  //     .map((medicine) => {
  //       if (medicine.id === item.id) {
          
  //         return { ...item, Availableuantity: Number(item.AvailableQuantity) - 1 };
  //       }
  //       console.log(item.AvailableQuantity)
  //       return item;
  //     })
  //     .filter((item) => item.AvailableQuantity >= 1);
  //   setItems(filterItems);
}

  const candyContext = {
    items: items,
    addItem: addCandyToList,
    reduceAvailableQuantity: reduceCandyQuantityFromList
  };

  return (
    <MedicineContext.Provider value={candyContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicineProvider;
