import React, { Component } from 'react';
import { AppContext } from '../../contexts/login-context';

export default class ProfilePage extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {({ isLoggedIn }) => (
                    <>
                        { isLoggedIn && <h1>PROFILE</h1>}
                    </>
                )}
            </AppContext.Consumer>
        );
    }
}