import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucks } from '../../actions/trucksActions';
import Container from '../UI/Container';
import Toolbar from '../Widgets/Toolbar';
import TruckList from '../Trucks/TruckList';

import classes from './Dashboard.module.css';

const Dashboard = () => {
  const dispatch = useDispatch();

  const trucks = useSelector((state) => state.searchedTrucks);
  const isFetching = useSelector((state) => state.isFetching);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <div className={classes.dashboard}>
      <Container>
        {isFetching ? (
          <p>Fetching trucks...</p>
        ) : (
          <Fragment>
            <Toolbar className={classes['dashboard__toolbar']} />
            <TruckList trucks={trucks} />
          </Fragment>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
