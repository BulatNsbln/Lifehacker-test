import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

export default function(props) {
    console.log(props, 333);
    return (
        <Fragment>
            <h1>Article </h1>
            <p>
                {props.id}
                text
                rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                rrrrrrrrrrr
            </p>
        </Fragment>
    )
};