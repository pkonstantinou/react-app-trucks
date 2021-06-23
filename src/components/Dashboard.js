import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Dashboard.module.css';

const API_URL =
  'https://truckoo-backend-aqkoiog6bq-ew.a.run.app/rest/v1/offers/active-offers';

const Dashboard = () => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL, { headers: { 'accept-language': 'en-US' } })
      .then((response) => {
        setTrucks(response.data);
      });
  }, []);

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
