import React, { useEffect, useState } from 'react';

export const ChatContext = React.createContext();

const ChatContextProvider = ({children}) => {
    const [currentChatRoom,setCurrentChatRoom] = useState(null);

    var title = currentChatRoom?.title;

    const defaultContext = {
        title,
        setCurrentChatRoom
    }

    useEffect(() => {
        title = currentChatRoom?.title;
    }, [currentChatRoom])
    return(
        <ChatContext.Provider value={defaultContext}>
            {children}
        </ChatContext.Provider>
    );
}

export default ChatContextProvider;