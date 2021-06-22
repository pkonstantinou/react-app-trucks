import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={classes.sidebar}>
      <ul>
        <li className={classes['sidebar-link']}>Dashboard</li>
        <li className={classes['sidebar-link']}>Logout</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
