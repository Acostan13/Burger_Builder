import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toobar = (props) => {
    return (
        <div>
            <header className={classes.Toolbar}>
                <div>MENU</div>
                <Logo />
                <nav>
                    <NavigationItems />
                </nav>
            </header>
        </div>
    );
};

export default toobar;