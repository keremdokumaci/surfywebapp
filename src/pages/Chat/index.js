import React, { useContext, useState, useEffect } from 'react';
import {ChatContext} from '../../contexts/ChatContext';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Card, TextField, Button, Grid } from '@material-ui/core';
import MessageBox from '../components/messagebox';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const RenderMessageBox = (isSender,message,messageSender) => {
    return(
        <Grid item xs={12} sm={12} md={12} l={12} xl={12}>
            <div>
                <MessageBox isSender={isSender} message={message} messageSender={messageSender}/>
            </div>
        </Grid>
    );
}

const Chat = () => {
    const classes = useStyles();
    const {title,socket,owner,roomId,setSocketRoom} = useContext(ChatContext);
    const [message,setMessage] = useState(null);
    const [allMessages,setAllMessages] = useState([]);
    
    const sendMessage = () => {
        const msg = {message:message,messageSender:owner,roomId:roomId};
        socket.emit("NEW_MESSAGE",msg);
    }

    useEffect(() => {
        socket.emit('JOIN_ROOM',{
            roomId: roomId
        });
        setSocketRoom(roomId);
        socket.on("NEW_MESSAGE",(message) => {
            const msg = {message: message.message,messageSender: message.messageSender, isSender: message.messageSender === owner};
            setAllMessages((allMessages)=>[...allMessages,msg]);
        });
    }, []);

    return(
        <Grid container>
            <Grid item xs={12} sm={12} md={12} l={12} xl={12}>
                <div className={classes.root}>
                    <AppBar position="static" color='primary'>
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            {title}
                        </Typography>
                    </Toolbar>
                    </AppBar>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} l={12} xl={12} >
                <Grid container style={{overflowY:'scroll',height:'500px',width:'100%'}}>
                    {!!allMessages && (
                        allMessages.map((message) => {
                            return RenderMessageBox(message.isSender,message.message,message.messageSender);
                        })
                    )}
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} l={12} xl={12}>
                <Card style={{borderRadius:'0'}}>
                    <Grid container>
                    <Grid item xs={11} sm={11} md={11} l={11} xl={11}>
                        <TextField variant="filled" style={{width:'100%'}} autoFocus onChange={(e)=>setMessage(e.target.value)}/>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} l={1} xl={1} style={{position:'relative'}}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            style={{position:'absolute',right:0,bottom:0,height:'100%',width:'100%'}}
                            onClick={sendMessage}
                        >
                            Gönder
                        </Button>
                    </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
};

export default Chat;