import React, { useContext, useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import {AuthContext} from '../../../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: 5,
        width: theme.spacing(12),
        height: theme.spacing(12),
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    }
}));
const VideoAvatar = () => {
    const [useWebcam, setUseWebcam] = useState(null);
    const classes = useStyles();
    const { user } = useContext(AuthContext);

    const handleVideo = (stream) => {
        const webcam = document.getElementById('videoDiv');
        webcam.srcObject = stream;
        webcam.play();
    };

    const videoError = (err) => {
        alert(err);
        setUseWebcam(false);
    }

    const enableWebcam = () => {
        setUseWebcam(true);
    }
    useEffect(() => {
        if(useWebcam)
        {
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
            if (navigator.getUserMedia) {
                navigator.getUserMedia({video: true}, handleVideo, videoError);
            }
        }
    }, [useWebcam])
    return(
        <>
            {
                useWebcam ? (
                    <video height="200px" crossOrigin="anonymous" id="videoDiv"/>
                ) : (
                    <Avatar className={classes.avatar}>{user.toString().substr(0,2)}</Avatar>
                )
            }
        </>
    );
};

export default VideoAvatar;