import React from 'react';
import classes from './Toolbar.module.css'

const toobar = (props) => {
    return (
        <div>
            <header className={classes.Toolbar}>
                <div>MENU</div>
                <div>LOGO</div>
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