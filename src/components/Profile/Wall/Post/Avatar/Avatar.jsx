import React from 'react';

import classes from './Avatar.module.scss';

const Avatar = (props) => (
  <div className={classes.avatar}>
    <img src={props.url} alt="avatar"/>
  </div>
);

export default Avatar;