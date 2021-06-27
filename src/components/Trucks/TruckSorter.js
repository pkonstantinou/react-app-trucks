import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortTrucks } from '../../actions/trucksActions';
import Dropdown from '../UI/Dropdown';

import classes from './TruckSorter.module.css';

const options = [
  { title: 'Publishing Date', id: 1 },
  { title: 'Price Ascending', id: 2 },
  { title: 'Price Descending', id: 3 }
];

const TruckSorter = () => {
  const [orderedOptions, setOrderedOptions] = useState(options);
  const dispatch = useDispatch();

  const getSelected = (id) => {
    return options.find((option) => option.id === id);
  };

  const getUnselected = (id) => {
    return options.filter((option) => option.id !== id);
  };

  const handleDropdownSelection = (e) => {
    const selectionId = parseInt(e.target.id, 10);

    switch (selectionId) {
      case 1:
        dispatch(sortTrucks('date'));
        break;
      case 2:
        dispatch(sortTrucks('asc'));
        break;
      case 3:
        dispatch(sortTrucks('desc'));
        break;
      default:
        throw new Error('Unknow selection id on TruckSorter!');
    }

    setOrderedOptions([
      getSelected(selectionId),
      ...getUnselected(selectionId)
    ]);
  };

  return (
    <Dropdown
      className={classes['truck-sorter']}
      options={orderedOptions}
      onClick={handleDropdownSelection}
    />
  );
};

export default TruckSorter;
