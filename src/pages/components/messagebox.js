import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme)=>({
    senderArea:{
        [theme.breakpoints.up('md')]:{
            width: '20%'
        },
        [theme.breakpoints.down('l')]:{
            width: '50%'
        },
        height:'30%',
        borderColor:'#adceff',
        backgroundColor:'#c3d6f3',
        border:'solid',
        borderTopRightRadius:'10px',
        borderBottomLeftRadius:'10px',
        borderTopLeftRadius:'10px',
        float:'right',
        padding:3,
        margin:5
    },
    receiverArea:{
        [theme.breakpoints.up('md')]:{
            width: '20%'
        },
        [theme.breakpoints.down('l')]:{
            width: '50%'
        },
        height:'30%',
        borderColor:'#b3ff9a',
        backgroundColor:'#c3efb8',
        border:'solid',
        borderTopRightRadius:'10px',
        borderBottomLeftRadius:'10px',
        borderBottomRightRadius:'10px',
        float:'left',
        padding:3,
        margin:5
    },
    messageSender:{
        fontSize:'smaller',
        fontWeight:600,
        fontStyle:'italic',
    },
    message:{
        margin:3,
        fontFamily:'cursive'
    }
}));
const MessageBox = (props) => {
    const classes = useStyles();
    const {messageSender,message,isSender} = props;
    return(
        <div className={isSender ? classes.senderArea : classes.receiverArea}>
            <div className={classes.messageSender}>
                {messageSender}
            </div>
            <div className={classes.message}>
                {message}
            </div>
        </div>
    );
};

export default MessageBox;