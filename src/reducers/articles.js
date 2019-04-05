import {
    LOAD_ALL_ARTICLES,
    START,
    SUCCESS,
} from "../constants";
import getObject from './utils';

export default (state = {}, action) => {
    const { type, response } = action;

    switch (type) {
        case LOAD_ALL_ARTICLES + START:
            return {
                ...state,
                loading: true
            };

        case LOAD_ALL_ARTICLES + SUCCESS:
            return {
                ...state,
                'articlesList': getObject(response.data),
                'loading': false,
                'loaded': true
            };

        default:
            return state
    }
}