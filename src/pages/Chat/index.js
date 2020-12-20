import React, { useContext } from 'react';
import {ChatContext} from '../../contexts/ChatContext';

const Chat = () => {
    const {title} = useContext(ChatContext);
    console.log(title);

    return(
        <div>
            chat content
        </div>
    )
};

export default Chat;