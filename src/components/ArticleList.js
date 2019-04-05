import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { loadAllArticles } from '../actions';

const apiEndpoint = 'https://lifehacker.ru/api/wp/v2/posts';

class ArticleList extends Component {
    state = {
        posts: []
    };

   componentDidMount() {
       this.props.loadAllArticles();

       axios.get(apiEndpoint)
           .then( response => {
               console.log(response);
               this.setState({posts: response.data})
           })
           .catch(error => {
               console.log(error);
           });
    };

    render() {
        let { posts } = this.state;
        if(posts.length === 0) return <h1> Loading </h1>
        return(
            <Fragment>
                <ul>
                    { posts.map( article => {
                        console.log(article.id, 22222)
                        let id = article.id;
                        return (
                                <li key = {id} >
                                    <img src={article.cat_cover.sizes.mobile} alt='лого' />
                                    <Link to={`/article/${id}`} >
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

export default connect(null, {loadAllArticles})(ArticleList)