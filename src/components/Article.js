import React, { Fragment } from 'react';

export default function Article( { title, text, createMarkup } ) {
        return (
            <Fragment>
                <h1> { title } </h1>
                <div dangerouslySetInnerHTML = { createMarkup(text) } />
            </Fragment>
        )
};
