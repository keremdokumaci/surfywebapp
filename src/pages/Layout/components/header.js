import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    loginBtn:{
        right:0,
        position: 'absolute',
        marginRight: '3%'
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    navbar: {
        right:0,
    },
    routerLink: {
        textDecoration: 'none'
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const styles = props.style;
    return(
        <React.Fragment style={styles}>
            <CssBaseline />
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap>
                        Surfy
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;