import React from 'react';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import MealsImage from '../../assets/meals.jpg';

const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h2>React Meals</h2>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt="MealsImage"/>
            </div>

        </React.Fragment>
    );
};

export default Header;