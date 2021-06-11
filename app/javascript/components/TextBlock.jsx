import React from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames';

const TextBlock = (props) => {
    const cmptClasses = classNames({
        'cmpt-text-block': true,
        '--is-light': props.themeLight,
        '--is-dark': !props.themeLight
    });

    const leftText = props.leftText ? props.leftText : "";
    const rightText = props.rightText ? props.rightText : "";

    return (
        <div className={cmptClasses}>
            <div className="global-container">
                {props.heading &&
                    <h2 className="heading-m cmpt-text-block__heading">{props.heading}</h2>
                }
                <div className="cmpt-text-block__text">
                    <div className="cmpt-text-block__left" dangerouslySetInnerHTML={{ __html: leftText }}></div>
                    <div className="cmpt-text-block__right" dangerouslySetInnerHTML={{ __html: rightText }}></div>
                </div>
            </div>
        </div>
    );
}

export default TextBlock;