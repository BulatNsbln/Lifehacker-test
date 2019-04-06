import React, { Fragment } from 'react';

import RouteListPage from '../../containers/routes';
import { GlobalStyle } from './style';

export default function() {
    return (
        <Fragment>
            <GlobalStyle/>
            <RouteListPage/>
        </Fragment>
    );
};

