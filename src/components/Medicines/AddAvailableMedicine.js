import React,{ useState, useContext } from 'react';
import Card from '../UI/Card';
import classes from "./MedicineItem/MedicineItemForm.module.css";


import MedicineContext from '../../store/medicine-context';

const AddAvailableMedicine = () => {

const [MedicineName, setMedicineName] = useState('');
const [MedicinePrice, setMedicinePrice] = useState();
const [MedicineQuantity, setMedicineQuantity] = useState();
const [MedicineDescription, setMedicineDescription] = useState('');

const medicineCntx = useContext(MedicineContext);


  const AddAvailableMedicineSubmitHandler= (event) => {
    event.preventDefault();
    const EventItem = {name:MedicineName,price:MedicinePrice,description:MedicineDescription,id:Math.random(),availableQuantity:MedicineQuantity,stockAvailability:true}
    medicineCntx.addItem(EventItem);
    
    // console.log(CandyName,CandyDescription,CandyPrice)
    //candyCntx.addCandy(CandyName,CandyDescription,CandyPrice);
        
  }
  const NameChangeHandler =(event)=>{
setMedicineName(event.target.value);
  }
  const DescriptionChangeHandler =(event)=>{
   setMedicineDescription(event.target.value);
      }
      const PriceChangeHandler =(event)=>{
        setMedicinePrice(event.target.value);
          }
          const QuantityChangeHandler =(event)=>{
            setMedicineQuantity(event.target.value);
              }
  return (
    <Card>
    <form className={classes.form} onSubmit={AddAvailableMedicineSubmitHandler}>
      <label htmlFor ="Name">Medicine Name</label>
      <input type='text' onChange ={NameChangeHandler}/>
      <label htmlFor ="Name">Description</label>
      <input type='text' onChange={DescriptionChangeHandler}/>
      <label htmlFor ="Name">Price</label>
      <input type='number' onChange={PriceChangeHandler}/>
      <label htmlFor ="Name">Quantity Available</label>
      <input type='number' onChange={QuantityChangeHandler}/>
      <button >Add to Medicine List</button> 
    </form >
    </Card>
  );
};

export default AddAvailableMedicine;