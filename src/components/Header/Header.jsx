import React from 'react'

import classes from './Header.module.scss'

const Header = () => (
  <header className={classes.header}>
    <div className={classes.wrapper}>
      <img
        src="https://image.flaticon.com/icons/png/512/3698/3698348.png"
        alt=""/>
    </div>
  </header>
);

export default Header;