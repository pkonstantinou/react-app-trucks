import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucks } from '../../actions/trucksActions';
import Search from '../Search';
import TruckItem from '../Trucks/TruckItem';

import classes from './Dashboard.module.css';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  const trucks = useSelector((state) => state.searchedTrucks);
  const isFetching = useSelector((state) => state.isFetching);

  return (
    <div className={classes.dashboard}>
      <Search />
      {isFetching && <p>Fetching trucks...</p>}
      <div className={classes['truck-list']}>
        {trucks.map((truck) => (
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
    </div>
  );
};

export default Dashboard;
