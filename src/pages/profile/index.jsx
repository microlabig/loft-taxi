import React, { Component } from 'react';
import { LoginContext } from '../../api/login-context';

export default class Profile extends Component {
    static contextType = LoginContext;

    render() {
        return (
            <>
                {this.context.isLoggedIn && <h1>PROFILE</h1>}
            </>
        );
    }
}