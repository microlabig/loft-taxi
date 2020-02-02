import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            logout: this.logout,
            defaultUrl: '/login'
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

AuthProvider.defaultProps = {
    children: null
}

AuthProvider.propTypes = {
    children: PropTypes.node
}

export { AuthContext, AuthProvider };
