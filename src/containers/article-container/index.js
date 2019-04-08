import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import Index from '../../components/article';
import Header from '../../components/header';
import { Wrapper } from "./styles";
import NotFound from '../../components/notFound';

class ArticleContainer extends PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        article: PropTypes.object.isRequired
    };

    createMarkup = (text) => {
        return {__html: text };
    };

    render() {
        const { article } = this.props;
        if(!article) return <NotFound/>;
        const title = article.title.rendered;
        const content = this.createMarkup(article.content.rendered);

        return (
            <Wrapper>
                <Link to="/">
                    <Header/>
                </Link>
                <Index title = { title } content = { content } />
            </Wrapper>
        )
    }
}

export default connect(
    (state, ownProps) => {
        return {
            article: state.articles.articlesList[ownProps.id]
        }
    }
)(ArticleContainer);

