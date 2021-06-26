import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <input
      className={`${props.className} ${classes.input}`}
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
