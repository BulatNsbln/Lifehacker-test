import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

export default function Article( { title, content } ) {
        return (
            <Fragment>
                <h1> { title } </h1>
                <div dangerouslySetInnerHTML = { content } />
            </Fragment>
        )
};

Article.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired
};
