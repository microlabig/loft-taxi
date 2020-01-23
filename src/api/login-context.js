import React from 'react';

export function login(email, password) {
    return true;
};

export function logout() {
    return false;
};

// контекст для авторизации
export const LoginContext = React.createContext({
     login: (email, password) => {}, 
     logout: () => {},
     isLoggedIn: false
});

//export default React.createContext({ login, logout, isLoggedIn: false });
