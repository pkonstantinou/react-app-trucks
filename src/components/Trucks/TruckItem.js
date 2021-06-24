import React from 'react';
import Card from '../UI/Card';
import Tag from '../UI/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { numToEuroAmount } from '../../utils/conversions';

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
        <div className={classes['truck-tags-geo']}>
          <div className={classes['truck-tags']}>
            {props.tags.map(
              (tag, index) =>
                tag && (
                  <Tag key={index} className={classes['truck-tag']}>
                    {tag.toUpperCase()}
                  </Tag>
                )
            )}
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
      </div>
      <div className={classes['truck-prices']}>
        <div className={classes['truck-prices__ask']}>
          <span>Ask Price</span>
          <span>{numToEuroAmount(props.askPrice)}</span>
        </div>
        <div className={classes['truck-prices__bid']}>
          <span>Current Offer</span>
          <span>{numToEuroAmount(props.bidPrice)}</span>
        </div>
      </div>
    </Card>
  );
};

export default TruckItem;
