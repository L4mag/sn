import React from 'react';

import classes from './NewPost.module.scss';

const NewPost = () => (
  <div className={classes.newPost}>
    <textarea name="" id="" cols="90" rows="2" placeholder="Type your thoughts"></textarea>
    <button className={classes.button}>post</button>
  </div>
);

export default NewPost;