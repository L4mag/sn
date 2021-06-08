import React from 'react';

import classes from './Post.module.scss';
import Avatar from './Avatar/Avatar';
import Likes from './Likes/Likes';

const Post = (props) => (
  <div className={ classes.post }>
    <Avatar url={ props.imageUrl }/>
    <p>
      { props.text }
      <Likes count={ props.likesCount == undefined ? 0 : props.likesCount }/>
    </p>
  </div>
);

export default Post;
