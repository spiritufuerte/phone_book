import React from 'react';
import classes from './Contact.module.css';

const Contact = (props) => {

    return (
        <div className={classes.contact}>
            {props.name} {props.surname} {props.phone}
        </div>
    )
}

export default Contact;