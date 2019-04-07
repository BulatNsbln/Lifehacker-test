import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { ArticleList } from "./index";

const articleList = [{"id":898420, "title":{"rendered": "Заголовок"}, "cat_cover":{"sizes":{"mobile":"link"}} }]

test('ArticleList', () => {
    const wrapper = render(
        <MemoryRouter >
            <ArticleList articleList={articleList} />
        </MemoryRouter>
    );
    expect(wrapper.find('.test__body_li')).toHaveLength(1);
    expect(wrapper.find('.test__body_h1')).toHaveLength(1);
});