import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

import Article from './Article';

const apiEndpoint = 'https://lifehacker.ru/api/wp/v2/posts';

 export class ArticleList extends Component {
    state = {
        posts: []
    };

   componentDidMount() {
       axios.get(apiEndpoint)
           .then( response => {
               console.log(response);
               this.setState({posts: response.data})
           })
           .catch(error => {
               console.log(error);
           });
    };

     getArticle = ({ match }) => {
         console.log('---', 'article match: ', match)
         return <Article id={match.params.id} isOpen key={match.params.id} />
     }

    render() {
        let { posts } = this.state;
        if(posts.length === 0) return <h1> Loading </h1>
        return(
            <Fragment>
                <Link to="/">Home</Link>
                <ul>
                    { posts.map( article => {
                        console.log(article.id, 22222)
                        let id = article.id;
                        return (
                            <Fragment>
                                <img src={article.cat_cover.sizes.mobile} alt='лого'></img>
                                <li>
                                    <Link to={`/articles:${id}`}>
                                        { article.title.rendered }
                                    </Link>
                                </li>
                            </Fragment>
                        )
                    })}
                </ul>
                <hr />
                <Route path="/articles:id" render={this.getArticle} />
            </Fragment>
        )
    };
}

