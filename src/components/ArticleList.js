import React, { Component, Fragment } from 'react';
import axios from 'axios';

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

    render() {
        let { posts } = this.state;
        if(posts.length === 0) return <h1> Loading </h1>
        return(
            <ul>
                { posts.map( article => {
                    return (
                        <Fragment>
                            <img src={article.cat_cover.sizes.mobile} alt='лого'></img>
                            <li> { article.title.rendered } </li>
                        </Fragment>
                    )
                })}
            </ul>
        )
    };
}

