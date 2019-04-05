import { FAIL, START, SUCCESS } from '../constants'
import axios from "axios";

export default (store) => (next) => (action) => {
    const { callAPI, type, ...rest } = action;
    if (!callAPI) return next(action);

    store.dispatch({
        type: type + START,
        ...rest
    });

    axios.get(callAPI)
        .then( response => {
            store.dispatch({ type: type + SUCCESS, response, ...rest })
        })
        .catch(error => store.dispatch({ type: type + FAIL, error, ...rest }))
}