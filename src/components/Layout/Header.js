import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCartButton.js';

import mealsImage from '../../assets/meals.jpg'

const Header = props => {

  return (
      <Fragment>
          <header className={classes.header}>
            <h1>React Meals Application</h1>
            <HeaderCardButton></HeaderCardButton>
          </header>
          <div className={classes['main-image']}>
        <img src={mealsImage}></img>
          </div>
      </Fragment>
  )



};

export default Header;