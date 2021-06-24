import React from 'react';

import classes from './Tag.module.css';

const Tag = (props) => {
  return (
    <span className={`${props.className} ${classes.tag}`}>
      {props.children}
    </span>
  );
};

export default Tag;
