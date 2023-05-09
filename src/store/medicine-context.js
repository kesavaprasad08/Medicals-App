import React from 'react';

const MedicineContext = React.createContext({
  items: [],
  totalAmount: 0,
  addMedicine: (item) => {},
  reduceAvailableQuantity:(item) => {}
});

export default MedicineContext;