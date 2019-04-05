import {
    LOAD_ALL_ARTICLES,
    START,
    SUCCESS,
} from "../constants";
import arrToObject from './utils';

export default (state = {}, action) => {
    const { type, response } = action;

    switch (type) {
        case LOAD_ALL_ARTICLES + START:
            return {
                ...state,
                loaded: false
            };

        case LOAD_ALL_ARTICLES + SUCCESS:
            return {
                ...state,
                'articlesList': arrToObject(response.data),
                'loaded': true
            };

        default:
            return state
    }
}