import React from 'react';
import ReactDOM from "react-dom";
import PersonBlock from '../../app/page_components/person_block/person_block';
console.log('loading from src app.js');

const components = [{ selector: 'person-block-js', callback: PersonBlock }];

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
