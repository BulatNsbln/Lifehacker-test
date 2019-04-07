import { LOAD_ALL_ARTICLES } from '../constants';

// Для CORS
const proxy = 'https://cors-anywhere.herokuapp.com/';

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: proxy + 'https://lifehacker.ru/api/wp/v2/posts'
    }
};