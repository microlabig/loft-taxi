import React, { Component } from 'react';
import { AuthContext } from '../../contexts/login-context';

export default class ProfilePage extends Component {
    render() {
        return (
            <AuthContext.Consumer>
                {({ isLoggedIn }) => (
                    <>
                        { isLoggedIn && <h1>PROFILE</h1>}
                    </>
                )}
            </AuthContext.Consumer>
        );
    }
}