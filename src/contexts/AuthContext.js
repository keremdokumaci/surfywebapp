import React, { useState } from 'react';

export const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {
    const [email, setEmail] = useState(undefined);

    const defaultContext= {
        email,
        setEmail
    }

    return(
        <AuthContext.Provider value={defaultContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;