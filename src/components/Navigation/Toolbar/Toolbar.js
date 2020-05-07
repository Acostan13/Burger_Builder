import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'

const toobar = (props) => {
    return (
        <div>
            <header className={classes.Toolbar}>
                <div>MENU</div>
                <Logo />
                <nav>
                    <ul>
                        ...
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default toobar;