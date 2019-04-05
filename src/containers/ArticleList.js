import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class ArticleList extends Component {
    static propTypes = {
        articleList: PropTypes.array.isRequired
    };

    render() {
        return(
            <ul>{this.body}</ul>
        )
    };

    get body() {
        const { articleList } = this.props;

        return articleList.map( article => {
            const id = article.id;

            return (
                <li key = {id} >
                    <img src={article.cat_cover.sizes.mobile} alt='лого' style={ { borderRadius: '50%', width: '100px', height: '100px' } } />
                    <Link to={`/articles/${id}`} >
                        { article.title.rendered }
                    </Link>
                </li>
            )
        })
    };
};

function mapStateToProps(state) {
    let articleList = [];
    if(state.articles.articlesList) {
        articleList = Object.values(state.articles.articlesList);
    }
    return {
        articleList
    }
}

export default connect( mapStateToProps )( ArticleList );