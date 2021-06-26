import React from 'react';
import { useDispatch } from 'react-redux';
import { searchTrucks } from '../../actions/trucksActions';

import classes from './TruckSearch.module.css';

const TruckSearch = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(searchTrucks(e.target.value));
  };

  return (
    <input
      className={classes['truck-search']}
      type='text'
      onChange={handleInputChange}
      placeholder='Search'
    />
  );
};

export default TruckSearch;
