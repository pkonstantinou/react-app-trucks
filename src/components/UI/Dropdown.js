import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import classes from './Dropdown.module.css';

const Dropdown = ({ options, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggling = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className={classes.dropdown}>
      <li
        onClick={handleToggling}
        className={classes['dropdown-item']}
        key={options[0].id}
      >
        {options[0].title}
        {isOpen ? (
          <FontAwesomeIcon
            icon={faChevronUp}
            className={classes['dropdown-item__icon']}
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronDown}
            className={classes['dropdown-item__icon']}
          />
        )}
      </li>
      {isOpen &&
        options.slice(1).map((option) => (
          <li
            onClick={onClick}
            className={classes['dropdown-item']}
            id={option.id}
            key={option.id}
          >
            {option.title}
          </li>
        ))}
    </ul>
  );
};

export default Dropdown;
