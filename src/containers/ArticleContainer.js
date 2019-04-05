import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

import Article from '../components/Article';
import Header from '../components/Header';

class ArticleContainer extends Component {

    createMarkup = (text) => {
        // конвертирование текста в html
        return {__html: text };
    };

    render() {
        const { article } = this.props;
        const title = article.title.rendered;
        const text = article.content.rendered;

        return <div>
            <Link to="/">
                <Header/>
            </Link>
            <Article title = { title } text = { text } createMarkup = { this.createMarkup } />
        </div>
    }
}

export default connect(
    (state, ownProps) => {
        return {
            article: state.articles.articlesList[ownProps.id]
        }
    },
    null
)(ArticleContainer);

