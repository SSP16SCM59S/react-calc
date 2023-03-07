import React from 'react';
import classes from "./Button.module.css";

function Button({value, handler}) {
    return (<div
        className={value == "C" || value == "=" ? `${classes.calculateButtons} ${classes.res}`
            : `${classes.calculateButtons}`} onClick={() => handler(value)}>
        {value}
    </div>)
}

export default Button;