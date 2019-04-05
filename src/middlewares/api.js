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
            console.log(response, 'middleware');
            store.dispatch({ type: type + SUCCESS, response, ...rest })
        })
        .catch(error => store.dispatch({ type: type + FAIL, error, ...rest }))

    /*fetch(callAPI)
        .then((res) => res.json())
        .then((response) =>
            store.dispatch({ type: type + SUCCESS, response, ...rest })
        )
        .catch((error) => store.dispatch({ type: type + FAIL, error, ...rest }))*/
}