import React from "react";
import { Link } from "react-router-dom";

const LinkList = (props) => {

    function getTarget(isBlank) {
        if (isBlank) {
            return ('_blank');
        } else {
            return ('_self');
        }
    }

    const listItems = props.links.map((link, index) =>
        <li key={`link-${index}`}>
            <a
                href={link.link}
                target={getTarget(link.targetBlank)}
            >{link.text}</a>
        </li >
    );

    return (
        <div className="cmpt-link-list">
            <div className="global-container">
                {props.heading &&
                    <h2 className="heading-l cmpt-link-list__heading">{props.heading}</h2>
                }

                <div className="cmpt-link-list__list-wrapper">
                    <ol>
                        {listItems}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default LinkList;