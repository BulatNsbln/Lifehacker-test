import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'

import ArticleList from '../ArticleList';
import { ArticlePage } from './ArticlePage';

export  class RouteListPage extends Component  {

    getArticle = ({ match }) => {
        console.log('---', 'article match: ', match)
        return <ArticlePage id={match.params.id} isOpen key={match.params.id} />
    }

    render() {
        return (
            <Fragment>
                <Route exact path='/' component={ArticleList}/>
                <Route path='/article/:id' render={this.getArticle}/>
            </Fragment>
        );
    }
}