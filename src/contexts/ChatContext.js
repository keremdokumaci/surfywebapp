import React, { useEffect, useState } from 'react';

export const ChatContext = React.createContext();

const ChatContextProvider = ({children}) => {
    const [currentChatRoom,setCurrentChatRoom] = useState(null);
    const [socket,setSocket] = useState(null);

    var title = currentChatRoom?.title;
    var roomId = currentChatRoom?.roomId;
    var owner = currentChatRoom?.owner;

    const defaultContext = {
        title,
        roomId,
        owner,
        socket,
        setSocket,
        setCurrentChatRoom
    }

    useEffect(() => {
        if(!!socket){
            socket.disconnect();
        }
    }, [socket])
    
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