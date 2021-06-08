import React from 'react';
import classes from './Likes.module.scss';

const Likes = (props) => (
  <span className={ classes.likes }>{ props.count  == 1 ? `${props.count } like` : `${props.count } likes` }</span>
);

export default Likes;