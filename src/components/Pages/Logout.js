import React from 'react';
import classes from './Logout.module.css';

const Logout = () => {
  return (
    <div className={classes.logout}>
      <div className={classes['logout-message']}>
        <h2>You have signed out successfully.</h2>
        <h4>Thanks for using our service.</h4>
      </div>
    </div>
  );
};

export default Logout;
