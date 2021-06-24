import React from 'react';
import Card from '../UI/Card';
import Tag from '../UI/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import classes from './TruckItem.module.css';

const TruckItem = (props) => {
  return (
    <Card className={classes['truck-item']}>
      <img
        className={classes['truck-image']}
        src={props.imageUrl}
        alt={props.title}
      />
      <div className={classes['truck-details']}>
        <p className={classes['truck-title']}>{props.title}</p>
        <div className={classes['truck-tags']}>
          {props.tags.map((tag, index) => (
            <Tag key={index} className={classes['truck-tag']}>
              {tag.toUpperCase()}
            </Tag>
          ))}
        </div>
        <div className={classes['truck-geo']}>
          <div className={classes['truck-sortcode']}>{props.sortCode}</div>
          <div className={classes['truck-location']}>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className={classes['truck-location__icon']}
            />
            {props.location}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TruckItem;
