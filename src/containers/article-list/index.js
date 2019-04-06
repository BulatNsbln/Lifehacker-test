import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { List, Image, Title, Elem, Wrapper } from './style';

class Index extends Component {
    static propTypes = {
        articleList: PropTypes.array.isRequired
    };

    render() {
        return(
            <List>
                {this.body}
            </List>
        )
    };

    get body() {
        const { articleList } = this.props;

        return articleList.map( article => {
            const id = article.id;
            return (
                <Elem key = {id} >
                    <Link to={`/articles/${id}`} >
                        <Wrapper>
                            <Image link = {article.cat_cover.sizes.mobile} />
                            <Title>
                                { article.title.rendered }
                            </Title>
                        </Wrapper>
                    </Link>
                </Elem>
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
};

export default connect( mapStateToProps )( Index );
