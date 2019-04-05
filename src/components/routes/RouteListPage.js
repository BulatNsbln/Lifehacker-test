import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import {connect} from "react-redux";

import ArticleList from '../ArticleList';
import ArticleContainer from './ArticleContainer';
import { loadAllArticles } from '../../actions';

class RouteListPage extends Component  {

    getArticle = ( { match } ) => {
        return !this.props.loaded ?
            <h1>Loading...</h1> :
            <ArticleContainer id = { match.params.id } />
    };

    getArticleList = () => {
        return !this.props.loaded ?
            <h1>Loading...</h1> :
            <ArticleList />
    };

    render() {
        return (
            <Switch>
                <Redirect from="/" to="/articles" exact />
                <Route exact path='/articles' render = { this.getArticleList } />
                <Route exact path='/articles/:id' render = { this.getArticle } />
            </Switch>
        );
    }

    componentDidMount() {
        !this.props.loaded && this.props.loadAllArticles()
    }
};

function mapStateToProps(state) {
    return {
        loaded: state.articles.loaded
    }
}

export default connect(
    mapStateToProps,
    { loadAllArticles })(RouteListPage)