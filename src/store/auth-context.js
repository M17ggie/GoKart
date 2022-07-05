import React, { useState } from "react";


//AuthContext is not a component but an object that will have a component.
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: token => { },
    logout: () => { }
});

export const AuthContextProvider = props => {

    //state for the token
    const [token, setToken] = useState('');

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token)
    };

    const logoutHandler = () => {
        setToken('')
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;