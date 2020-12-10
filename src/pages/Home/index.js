import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ChatCard from './components/chatCard';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

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
    }
}));

const Home = () => {
    const classes = useStyles();
    return(
        <Container>
            <Grid container className={classes.buttonRow} spacing={2}>
                <Grid item xs={12} md={12} sm={12} xl={12}>
                    <Button variant="contained" color="secondary">
                        Create Chat Room
                    </Button>
                </Grid>
            </Grid>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={3}>
                    <ChatCard />
                </Grid>
                <Grid item xs={3}>
                    <ChatCard />
                </Grid>
                <Grid item xs={3}>
                    <ChatCard />
                </Grid>
                <Grid item xs={3}>
                    <ChatCard />
                </Grid>
            </Grid>
        </Container>
    );
};


export default Home;