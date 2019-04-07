import React from 'react';
import { mount } from 'enzyme';

import Article from './index';

describe('Article', () => {
    const title = 'Заголовок';
    const content = {'__html': <p>Текст статьи</p>};
    let container;

    beforeEach(()=>{
        container = mount(<Article content={content} title={title}/>);
    })

    it('render', () => {
        expect(container.find('h1').length).toEqual(1);
    });

    it('to equal prop', () => {
        expect(container.prop('content')).toEqual(content);
    });
});