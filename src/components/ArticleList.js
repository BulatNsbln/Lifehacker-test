import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { loadAllArticles } from '../actions';

const apiEndpoint = 'https://lifehacker.ru/api/wp/v2/posts';

class ArticleList extends Component {
    render() {
        let { articleList } = this.props;
        if(articleList.length === 0) return <h1> Loading </h1>
        return(
            <Fragment>
                <ul>
                    { articleList.map( article => {
                        console.log(article.id, 22222)
                        let id = article.id;
                        return (
                                <li key = {id} >
                                    <img src={article.cat_cover.sizes.mobile} alt='лого' style={ { borderRadius: '50%', width: '100px', height: '100px' } } />
                                    <Link to={`/articles/${id}`} >
                                        { article.title.rendered }
                                    </Link>
                                </li>
                        )
                    })}
                </ul>
            </Fragment>
        )
    };
}

function mapStateToProps (state) {
    let articleList = [];
    if(state.articles.articlesList) {
        articleList = Object.values(state.articles.articlesList);
    }
    return {
        articleList
    }
}

export default connect(mapStateToProps)(ArticleList)