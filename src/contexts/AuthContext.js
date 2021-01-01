import React, { useState } from 'react';

export const AuthContext = React.createContext();

export default ({children}) => {
    const [user, setUser] = useState(null);

    const defaultContext= {
        user,
        setUser
    }

    return(
        <AuthContext.Provider value={defaultContext}>
            {children}
        </AuthContext.Provider>
    );
};