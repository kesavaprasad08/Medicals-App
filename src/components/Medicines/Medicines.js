import { Fragment } from 'react';
import AddAvailableMedicine from './AddAvailableMedicine';
import AvailableMedicines from './AvailableMedicine';
const Meals = () => {
  return (
    <Fragment>
      <AddAvailableMedicine />
      <AvailableMedicines />
    </Fragment>
  );
};

export default Meals;