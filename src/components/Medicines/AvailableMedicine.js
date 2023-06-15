import React,{ useContext} from 'react';
import Card from '../UI/Card';
import MedicineItem from './MedicineItem/MedicineItem';
import classes from './AvailableMedicines.module.css';
import CandyContext from '../../store/medicine-context';



const AvailableCandies = () => {

  const MedicineCtx = useContext(CandyContext);
  // console.log(MedicineCtx.items);
  
  console.log(MedicineCtx)
  const medicineList = MedicineCtx.items.map((medicine) => (
    
    <MedicineItem
    crId={medicine._id}
      id={medicine.id}
      key={medicine.id}
      name={medicine.name}
      description={medicine.description}
      price={medicine.price}
      availableQuantity={medicine.availableQuantity}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{medicineList}</ul>
      </Card>
    </section>
  );
};

export default AvailableCandies;