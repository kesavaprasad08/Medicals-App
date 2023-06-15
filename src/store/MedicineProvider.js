import { useEffect, useState } from "react";
import axios from "axios";
import MedicineContext from "./medicine-context";

const MedicineProvider = (props) => {


  const [items, setItems] = useState([]);
  //
  
  useEffect(()=> {
    crudcrudTOCntxt();
  },[])

  const crudcrudTOCntxt = async() => {
    const response = await axios.get('https://crudcrud.com/api/7e7b57dc0aeb45afa77ee7357b6b3549/availableMedicines');
    setItems(response.data);
  }
 


  const addCandyToList = async(item) => {
const response = await axios.post('https://crudcrud.com/api/7e7b57dc0aeb45afa77ee7357b6b3549/availableMedicines',item);
crudcrudTOCntxt();
// console.log(response);
    // const newItemList=[...items,item]
    // setItems(newItemList);

};
const reduceCandyQuantityFromList = async(item) => {
  try{
    // console.log(item)
  if((Number(item.availableQuantity))>0){

    const response = await axios.put(`https://crudcrud.com/api/7e7b57dc0aeb45afa77ee7357b6b3549/availableMedicines/${item.crId}`,{...item,availableQuantity:Number(item.availableQuantity)-1});
    crudcrudTOCntxt();
  } 
}
catch(err) {
  console.log(err)
}
  
  // const filteredItems = items
  // .map((medicine) => {
  //   if (medicine.id === item.id) { 
  //     if(Number(medicine.availableQuantity)>1){
  //         console.log(item.availableQuantity);
  //             return { ...item, availableQuantity: Number(item.availableQuantity) - 1 };
  //     }
  //     else{
  //       return { ...item, availableQuantity:'Out of Stock',stockAvailability:false};
  //     }
            
  // }
  // return item;

  // })
  // console.log(filteredItems)
  // setItems(filteredItems);









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
// console.log(items)
  return (
    <MedicineContext.Provider value={candyContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicineProvider;
