import React from 'react';
import { render } from 'react-dom';

const TextWithMediaBlock = (props) => {
    const { text, media } = props;

    if (props.componentEl) {
        render(
            <div className="c02__wrapper">
                <div className="c02__text" dangerouslySetInnerHTML={{ __html: text }}></div>
                <img className="c02__image" src={media} />

            </div>,
            props.componentEl // Selector to mount the component to.
        );
    }
}

export default TextWithMediaBlock
