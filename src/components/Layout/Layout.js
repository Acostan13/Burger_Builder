import React from 'react'
import Aux from '../../hoc/Auxiliary'
import classes from './Layout.module.css'
const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
        <div>Build Controls</div>
    </Aux>
)

export default layout
