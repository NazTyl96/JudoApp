import React from "react";
import clsx from "clsx";

const Button = {
    Plain: function(props) {
        const classes = clsx({
            'button-plain': true,
            'text-small': props.small,
            'text-medium': props.medium || (!props.small && !props.large),
            'text-large': props.large,
            'text-bold': props.bold
        })
        return <button className={classes} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
    },
    Transparent: function(props) {
        const classes = clsx({
            'button-transparent': true,
            'text-small': props.small,
            'text-medium': props.medium || (!props.small && !props.large),
            'text-large': props.large,
            'text-bold': props.bold
        })
        return <button className={classes} onClick={props.onClick}>{props.children}</button>
    },
}

export {Button};