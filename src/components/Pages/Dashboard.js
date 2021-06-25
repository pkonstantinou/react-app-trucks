import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucks } from '../../actions/trucksActions';
import Search from '../Search';
import TruckList from '../Trucks/TruckList';

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
      <TruckList trucks={trucks} />
    </div>
  );
};

export default Dashboard;
