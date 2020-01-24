import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {
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
            <AppContext.Provider value={this.getProviderValues()}>
                {children}
            </AppContext.Provider>
        );
    }
}

export { AppContext, AppProvider};

/* import React from 'react';

export function login(email, password) {
    return new Promise( (resolve, reject) => {
        resolve(true);
    });
};

export function logout() {
    return new Promise( (resolve, reject) => {
        resolve(false);
    });
};

// контекст для авторизации
export const LoginContext = React.createContext({
    //  login: (email, password) => {}, 
    //  logout: () => {},
     isLoggedIn: false,
     setLoggedIn: () => { }
});
 */