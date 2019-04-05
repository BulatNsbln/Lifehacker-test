import { LOAD_ALL_ARTICLES } from '../constants';

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: 'https://lifehacker.ru/api/wp/v2/posts'
    }
};