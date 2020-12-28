import React from "react";
import classes from "./About.module.scss";
import {GitHub, LinkedIn, Facebook} from '@material-ui/icons/';

const About = () => {
    return (
        <div className={classes.wrapper}>
            <h1>About Me:</h1>
            <p>Hi, my name is Vasyl. I am fast learning and ambitious Front end
                developer who is looking for new opportunities.
                Except of this I am very responsible person with
                passion to self-improvement who always try to
                understand how it works under the hood.Extremely
                motivated to constantly develop my skills and grow
                professionally. I am confident in my ability .
            </p>
            <div className={classes.social_wrapper}>
                <a href="https://github.com/spiritufuerte"><LinkedIn fontSize="large"/></a>
                <a href="https://github.com/spiritufuerte"><GitHub fontSize="large"/></a>
                <a href="https://github.com/spiritufuerte"><Facebook fontSize="large"/></a>
            </div>
        </div>

    )
}

export default About;