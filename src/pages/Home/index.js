import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChatCard from './components/chatCard';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import NewChatRoomPopup from './components/newChatRoomPopup';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import {GetChatRooms} from './api/index';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    buttonRow:{
        textAlign:'center',
        flexGrow: 1,
        marginBottom: '1%'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        width:'90%'
    },
    iconButton: {
        padding: 10,
        float:'right',
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));



const Home = () => {
    const classes = useStyles();
    const [chatRooms,setChatRooms] = useState(null);
    const [openModal,setOpenModal] = useState(false);

    const openNewChatRoomModal = () => {
        setOpenModal(true);
    }
    
    useEffect(() => {
        const fetchData = async () => {
            const [response,error] = await GetChatRooms();
            if(!error)
                setChatRooms(response.chatrooms);
            else
                setChatRooms(null);
        }
        fetchData();
    },[chatRooms])

    return(
        <React.Fragment>
            <Grid container className={classes.buttonRow} spacing={3}>
                <Grid item xs={12} md={9} sm={9} xl={9}>
                    <Paper component="form" className={classes.root}>
                        <InputBase
                            className={classes.input}
                            placeholder="Bir konu aratın.."
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3} sm={3} xl={3}>
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={openNewChatRoomModal}
                    >
                        Oda Oluştur
                    </Button>
                </Grid>
                    {!!chatRooms && (
                        Object.keys(chatRooms).map((key) => {
                            var room = chatRooms[key];
                            return (
                                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                                    <ChatCard 
                                        key={key} 
                                        title={room.title} 
                                        description={room.description} 
                                        imageUrl = {room.imageUrl} 
                                        owner = {room.email}
                                        roomId={room.roomId}
                                    />
                                </Grid>
                            )
                        })
                    )}
                    
            </Grid>
            {openModal && (
                <NewChatRoomPopup openModal={openModal} setOpenModal={setOpenModal}/>
            )}
        </React.Fragment>
    );
};


export default Home;