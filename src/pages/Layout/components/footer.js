import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        bottom: 0,
        width: '100%',
        position:'fixed'
    },
}));

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    const classes = useStyles();
    return(
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Surfy Chat Application
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Developed By Kerem Dokumacı
            </Typography>
            <Copyright />
        </footer>
    );
};

export default Footer;