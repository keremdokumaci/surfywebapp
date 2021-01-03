import React, { useContext, useState, useEffect } from 'react';
import {ChatContext} from '../../contexts/ChatContext';
import {AuthContext} from '../../contexts/AuthContext';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Card, TextField, Button, Grid } from '@material-ui/core';
import MessageBox from '../components/messagebox';
import VideoAvatar from './components/videoAvatar';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import {GetChatroomsUsers} from './api/index';

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
    const {socket,owner,roomId,setSocketRoom} = useContext(ChatContext);
    const { user } = useContext(AuthContext);
    const [message,setMessage] = useState(null);
    const [allMessages,setAllMessages] = useState([]);
    const [isCamOpened,setIsCamOpened] = useState(false);
    const [activeUsers, setActiveUsers] = useState([]);

    const sendMessage = () => {
        const msg = {message:message,messageSender:owner,roomId:roomId};
        socket.emit("NEW_MESSAGE",msg);
    };

    const enableCam = () => {
        if(!isCamOpened)
        {
            socket.emit('ENABLE_CAM',{user: user, roomId: roomId, enable: true});
            setIsCamOpened(true);
        }
        else
        {
            socket.emit('ENABLE_CAM',{user: user, roomId: roomId, enable: false});
            setIsCamOpened(false);
        }
        
    }

    useEffect(() => {
        socket.emit('JOIN_ROOM',{
            roomId: roomId,
            user: user
        });
        setSocketRoom(roomId);
        socket.on("NEW_MESSAGE",(message) => {
            const msg = {message: message.message,messageSender: message.messageSender.user, isSender: message.messageSender.user === owner};
            setAllMessages((allMessages)=>[...allMessages,msg]);
        });

        socket.on('ENABLE_CAM',(data) => {
            const users = activeUsers;
            users.forEach(user => {
                if(user.user === data.user){
                    return user.user = data.user;
                }
            });

            setActiveUsers(users);
        });
        
        

    }, []);

    useEffect(() => {
        const fetchChatroomsUsers = async () => {
            const [response, error] = await GetChatroomsUsers(roomId);
            const users = response.data.activeUsers;
            setActiveUsers(users);
        };
        fetchChatroomsUsers();   
    },[activeUsers]);

    return(
        <>
        <Grid container>
            <Grid item xs={2} sm={2} md={2} l={2} xl={2}>
                <Button color={isCamOpened ? "secondary" : "primary"} onClick={enableCam}>
                    <CameraAltIcon /> {isCamOpened ? "Kamerayı Kapat" : "Kamera Aç"}
                </Button>
            </Grid>
        </Grid>
        <Grid container spacing={1}>
            <Grid item xs={9} sm={9} md={9} l={9} xl={9}>
                <Grid item xs={12} sm={12} md={12} l={12} xl={12}>
                        <div className={classes.root}>
                            <AppBar position="static" color='transparent'>
                            <Toolbar variant="dense">
                                <Typography variant="h6" color="inherit">
                                    Video
                                </Typography>
                            </Toolbar>
                            </AppBar>
                        </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} l={12} xl={12} >
                    <Grid container>
                        {!!activeUsers && (
                            activeUsers.map((activeUser) => {
                                return (
                                    <Grid item xs={12} sm={12} md={4} l={2} xl={2} >
                                        <VideoAvatar email={activeUser.user} useWebcam={user.user === activeUser.user ? isCamOpened : user.cameraEnabled} setUseWebcam={user.user === activeUser.user ? setIsCamOpened : null}/>
                                    </Grid>
                                );
                            })
                        )}
                        
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={3} sm={3} md={3} l={3} xl={3}>
                <Grid item xs={12} sm={12} md={12} l={12} xl={12}>
                    <div className={classes.root}>
                        <AppBar position="static" color='transparent'>
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit">
                                Mesajlar
                            </Typography>
                        </Toolbar>
                        </AppBar>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} l={12} xl={12} >
                    <Grid container style={{overflowY:'scroll',height:'500px',width:'100%'}}>
                        {!!allMessages && (
                            allMessages.map((message) => {
                                return RenderMessageBox(message.messageSender === user.user,message.message,message.messageSender);
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
    </Grid>
    </>
    )
};

export default Chat;