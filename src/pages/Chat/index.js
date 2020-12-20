import React, { useContext } from 'react';
import {ChatContext} from '../../contexts/ChatContext';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Card, TextField, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const Chat = () => {
    const classes = useStyles();
    const {title} = useContext(ChatContext);
    console.log(title);

    return(
        <Grid container>
            <Grid item xs={12} sm={12} md={12} l={12} xl={12}>
                <div className={classes.root}>
                    <AppBar position="static" color='secondary'>
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            {title}
                        </Typography>
                    </Toolbar>
                    </AppBar>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} l={12} xl={12}>
                <Card style={{borderRadius:'0'}}>
                    Chat content here..
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} l={12} xl={12}>
                <Card style={{borderRadius:'0'}}>
                    <Grid container>
                    <Grid item xs={11} sm={11} md={11} l={11} xl={11}>
                        <TextField variant="filled" style={{width:'100%'}} autoFocus/>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} l={1} xl={1} style={{position:'relative'}}>
                        <Button variant="contained" color="primary" style={{position:'absolute',right:0,bottom:0,height:'100%',width:'100%'}}>
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