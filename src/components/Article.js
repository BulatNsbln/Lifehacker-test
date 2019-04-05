import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";

class Article extends Component {
    createMarkup = (text) => {
        // конвертирование текста в html
        return {__html: text };
    };

    render() {
        const {article} = this.props;
        const title = article.title.rendered;
        const text = article.content.rendered;

        return (
            <Fragment>
                <h1> { title } </h1>
                <div dangerouslySetInnerHTML = { this.createMarkup(text) } />
            </Fragment>
        )
    }
};

export default Article;