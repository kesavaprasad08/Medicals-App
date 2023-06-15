import MedicineItemForm from "./MedicineItemForm";
import classes from "./MedicineItem.module.css";

const MedicineItem = (props) => {
//  console.log(props)
  const price = `Rs.${Number(props.price).toFixed(2)}`;
// console.log(props)
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div className={classes.description}>Quantity Available : {props.availableQuantity}</div>

      </div>
      <div>
        <MedicineItemForm
        crId={props.crId}
          id={props.id}
          name={props.name}
          description={props.description}
          price={props.price}
          availableQuantity={props.availableQuantity}
        />
      </div>
    </li>
  );
};

export default MedicineItem;
