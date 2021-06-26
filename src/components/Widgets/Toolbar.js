import React from 'react';
import TruckSearch from '../Trucks/TruckSearch';
import TruckSorter from '../Trucks/TruckSorter';

import classes from './Toolbar.module.css';

const Toolbar = (props) => {
  return (
    <div className={`${props.className} ${classes.toolbar}`}>
      <TruckSearch />
      <TruckSorter />
    </div>
  );
};

export default Toolbar;
