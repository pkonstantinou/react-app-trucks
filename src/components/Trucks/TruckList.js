import React from 'react';
import TruckItem from './TruckItem';

import classes from './TruckList.module.css';

const TruckList = (props) => {
  return (
    <div className={classes['truck-list']}>
      {props.trucks.map((truck) => (
        <TruckItem
          title={truck.title}
          imageUrl={truck.vehicle_picture_front}
          tags={truck.tags}
          sortCode={truck.shortCode}
          location={truck.location}
          askPrice={truck.askPrice}
          bidPrice={truck.bidPrice}
        />
      ))}
    </div>
  );
};

export default TruckList;
