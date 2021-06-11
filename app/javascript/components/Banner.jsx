import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import classNames from 'classnames';

const Banner = (props) => {
    const cmptClasses = classNames({
        'cmpt-banner': true,
        '--is-light': props.themeLight,
        '--is-dark': !props.themeLight,
        '--is-left': props.alignLeft,
        '--is-right': !props.alignLeft
    });

    return (
        <div className={cmptClasses}>
            <div className="cmpt-banner__wrapper">
                <Nav themeLight={props.themeLight} />
                <div className="cmpt-banner__content">
                    {props.headline &&
                        <h1 className="heading-xl">{props.headline}</h1>
                    }
                </div>
            </div>
        </div>
    );
}

export default Banner;