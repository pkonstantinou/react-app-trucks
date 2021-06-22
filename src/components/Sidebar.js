import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={classes.sidebar}>
      <ul>
        <li>
          <Link to='/dashboard' className={classes['sidebar-link']}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to='/logout' className={classes['sidebar-link']}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
