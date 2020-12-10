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
        position:'fixed'
    },
    routerLink: {
        textDecoration: 'none'
    }
}));

const Header = () => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap>
                        Surfy
                    </Typography>
                    <nav className={classes.navbar}>
                        <Link to="/login" className={classes.routerLink}>
                            <Button variant="contained" color="secondary" className={classes.link}>
                                Login
                            </Button>
                        </Link>
                        <Link to="/signup" className={classes.routerLink}>
                            <Button variant="contained" color="secondary" className={classes.link}>
                                Sign Up
                            </Button>
                        </Link>
                    </nav>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;