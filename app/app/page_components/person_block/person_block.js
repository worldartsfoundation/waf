import React from 'react';
import { render } from 'react-dom';

const PersonBlock = (props) => {
    const { firstName, lastName } = props;

    if (props.componentEl) {
        render(
            <main className="main">
                RENDERED FROM BLOCK<br />
                firstName: {firstName}<br />
                lastName: {lastName}

            </main>,
            props.componentEl // Selector to mount the component to.
        );
    }
}

export default PersonBlock
