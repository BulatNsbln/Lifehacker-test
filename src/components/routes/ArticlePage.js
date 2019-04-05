import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Article from '../Article';

export class ArticlePage extends Component {

    render() {
        return <div>
            <Link to="/">Home.</Link>
            <Article id = {this.props.id} />
        </div>
    }
}

