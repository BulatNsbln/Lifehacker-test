import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import Article from '../../components/Article';
import Header from '../../components/header';
import { Wrapper } from "./styles";

class ArticleContainer extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        article: PropTypes.object.isRequired
    };

    createMarkup = (text) => {
        // конвертирование текста в html
        return {__html: text };
    };

    render() {
        const { article } = this.props;
        const title = article.title.rendered;
        const content = this.createMarkup(article.content.rendered);

        return (
            <Wrapper>
                <Link to="/">
                    <Header/>
                </Link>
                <Article title = { title } content = { content } />
            </Wrapper>
        )
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

