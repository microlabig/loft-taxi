import React, { Component } from 'react';

const AuthContext = React.createContext();

class AuthProvider extends Component {
    state = {
        isLoggedIn: false
    }

    login = (email, password) => {
        this.setState({
            isLoggedIn: true
        })
    }

    logout = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    getProviderValues = () => {
        return {
            isLoggedIn: this.state.isLoggedIn,
            login: this.login,
            logout: this.logout
        }
    }

    render() {
        const { children } = this.props;
        return (
            <AuthContext.Provider value={this.getProviderValues()}>
                {children}
            </AuthContext.Provider>
        );
    }
}

export { AuthContext, AuthProvider};
