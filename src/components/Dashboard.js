import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucks } from '../actions/trucksActions';

import classes from './Dashboard.module.css';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  const trucks = useSelector((state) => state.trucks);

  return (
    <div className={classes.dashboard}>
      <ul>
        {trucks.map((truck) => (
          <li key={truck.uid}>{truck.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
