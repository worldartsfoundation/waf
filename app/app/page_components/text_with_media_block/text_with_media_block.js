import React from 'react';
import { render } from 'react-dom';

const TextWithMediaBlock = (props) => {
    const { text, media } = props;

    if (props.componentEl) {
        render(
            <div className="twm__wrapper">
                <div className="twm__text" dangerouslySetInnerHTML={{ __html: text }}></div>
                <div className="twm__media-wraper" >
                    <img className="twm__image" src={media} />
                </div>

            </div>,
            props.componentEl // Selector to mount the component to.
        );
    }
}

export default TextWithMediaBlock
