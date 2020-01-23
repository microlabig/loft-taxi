import React, { Component } from 'react';
import { LoginContext } from '../../api/login-context';

export default class Map extends Component {
    // static contextType = LoginContext;

    render() {
        // console.log(LoginContext);
        // console.log(this.context.isLoggedIn);

        return (
            <LoginContext.Consumer>
                {({ isLoggedIn }) => (
                    <>
                        { isLoggedIn && <h1>MAP</h1>}
                    </>
                )}
            </LoginContext.Consumer>
        );
    }
}