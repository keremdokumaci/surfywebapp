import React, { useContext, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Container from '@material-ui/core/Container';
import {ChatContext} from '../../contexts/ChatContext';
import socketIOClient from "socket.io-client";


const Layout = ({children}) => {
    const { setSocket } = useContext(ChatContext);

    useEffect(() => {
        const socketClient = socketIOClient(process.env.REACT_APP_SURFY_API_ENDPOINT);
        setSocket(socketClient);
    }, []);

    return(
        <>
            <Header/>
                <div>
                    {children}
                </div>
            <Footer/>
        </>
    );
};

export default Layout;