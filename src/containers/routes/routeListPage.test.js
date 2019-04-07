import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { RouteListPage } from './index';
import ArticleList from '../article-list';
import NotFound from '../../components/notFound';

function add() {}

test('invalid path should redirect to 404', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/random' ]}>
            <RouteListPage loaded={ true } loadAllArticles={add} />
        </MemoryRouter>
    );
    expect(wrapper.find(ArticleList)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(1);
});

