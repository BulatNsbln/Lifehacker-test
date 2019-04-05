import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import ArticleList from '../ArticleList';
import ArticleContainer from '../ArticleContainer';
import Loader from '../../components/Loader'
import { loadAllArticles } from '../../actions';


class RouteListPage extends Component  {
    static propTypes = {
        loaded: PropTypes.bool.isRequired,
        loadAllArticles: PropTypes.func.isRequired
    };

    getArticle = ( { match } ) => {
        return !this.props.loaded ?
            <Loader/> :
            <ArticleContainer id = { match.params.id } />
    };

    getArticleList = () => {
        return !this.props.loaded ?
            <Loader/> :
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
    let loaded = state.articles.loaded || false;
    return {
        loaded
    }
};

export default connect(
    mapStateToProps,
    { loadAllArticles })(RouteListPage);
