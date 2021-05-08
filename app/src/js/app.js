import React from 'react';
import ReactDOM from "react-dom";
import PersonBlock from '../../app/page_components/person_block/person_block';
import TextWithMediaBlock from '../../app/page_components/text_with_media_block/text_with_media_block';
import '../scss/app.scss';

const components = [
    { selector: 'person-block-js', callback: PersonBlock },
    { selector: 'text-with-media-block-js', callback: TextWithMediaBlock }
];

components.map(function (component) {
    // Run this block for each instance of the selector found.
    const allInstances = document.getElementsByClassName(component.selector);

    Array.from(allInstances).forEach((instance) => {
        // Get props from the data attributes on the element.
        const props = { ...instance.dataset };
        props.componentEl = instance;
        component.callback(props);
    });
})
