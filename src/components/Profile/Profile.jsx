import React from 'react';

import classes from './Profile.module.scss';

import Wall from './Wall/Wall';

const Profile = () => (
  <div className={classes.content}>
    <div>
      <img src="https://ok-radio.ru/wp-content/uploads/2016/03/image-3.jpg" alt=""/>
    </div>
    <div className={classes.about}>
      <div className={classes.avatar}>
        <img src="https://www.treehugger.com/thmb/wtEZ-8nEq-BbxL8jC8eH5eDS0bo=/2070x2070/smart/filters:no_upscale()/piglet-grass-dandelions-01-b21d7ef8f881496f8346dbe01859537e.jpg" alt=""/>
      </div>
      <div className={classes.information}>
        <h2>Name Surname</h2>
        <span className={classes.status}>Some status</span>
        <span className={classes.friends}>69 friends</span>
      </div>
    </div>
    <Wall/>
  </div>
);

export default Profile;