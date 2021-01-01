import React, { useEffect, useState } from 'react';

export const ChatContext = React.createContext();

const ChatContextProvider = ({children}) => {
    const [currentChatRoom,setCurrentChatRoom] = useState(null);
    const [socket,setSocket] = useState(null);
    const [socketRoom, setSocketRoom] = useState(null);

    var title = currentChatRoom?.title;
    var roomId = currentChatRoom?.roomId;
    var owner = currentChatRoom?.owner;

    const defaultContext = {
        title,
        roomId,
        owner,
        socket,
        setSocket,
        setCurrentChatRoom,
        setSocketRoom
    }

    // useEffect(() => {
    //     if(!!socket){
    //         socket.disconnect();
    //     }
    // }, [socketRoom])
    
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