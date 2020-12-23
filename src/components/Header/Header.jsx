import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Header.module.scss';

const Header = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/home' activeClassName={classes.active}>Home</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/contacts' activeClassName={classes.active}>Contacts</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/about' activeClassName={classes.active}>About</NavLink>
            </div>


        </nav>
    )
}

export default Header;