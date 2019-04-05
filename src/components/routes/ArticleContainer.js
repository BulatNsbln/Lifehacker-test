import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Article from '../Article';
import {connect} from "react-redux";

class ArticleContainer extends Component {

    render() {
        console.log(this.props, '----------')
        return <div>
            <Link to="/">Home.</Link>
            <Article article = {this.props.article} />
        </div>
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

