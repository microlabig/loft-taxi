import React, { Component } from 'react';

import Map from '../../components/map';

import { AppContext } from '../../contexts/login-context';

export default class MapPage extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {({ isLoggedIn }) => (
                    <>
                        { isLoggedIn && <h1>MAP</h1>}
                        <Map />
                    </>
                )}
            </AppContext.Consumer>
        );
    }
}