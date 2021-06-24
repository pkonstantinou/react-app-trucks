import React from 'react';
import { useDispatch } from 'react-redux';
import { searchTrucks } from '../actions/trucksActions';

const Search = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(searchTrucks(e.target.value));
  };

  return (
    <div>
      <input type='text' onChange={handleInputChange} placeholder='Search' />
    </div>
  );
};

export default Search;
