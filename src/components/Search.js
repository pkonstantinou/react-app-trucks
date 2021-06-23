import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTrucks } from '../actions/trucksActions';

const Search = () => {
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.type === 'click' || e.key === 'Enter') {
      dispatch(searchTrucks(searchString));
      setSearchString('');
    }
  };

  return (
    <div>
      <input
        type='text'
        onChange={handleInputChange}
        onKeyPress={handleSearchSubmit}
        value={searchString}
      />
      <button onClick={handleSearchSubmit}>Search</button>
    </div>
  );
};

export default Search;
