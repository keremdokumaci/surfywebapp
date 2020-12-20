import React, { useEffect, useState } from 'react';

export const ChatContext = React.createContext();

export default ({children}) => {
    const [currentChatRoom,setCurrentChatRoom] = useState(null);

    const title = currentChatRoom?.title;

    const defaultContext = {
        currentChatRoom,
        setCurrentChatRoom,
        title
    }

    useEffect(() => {

    }, [currentChatRoom])
    return(
        <ChatContext.Provider value={defaultContext}>
            {children}
        </ChatContext.Provider>
    )
}