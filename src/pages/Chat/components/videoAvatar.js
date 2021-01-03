import React, {  useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: 5,
        width: '180px',
        height:  '180px',
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    image: {
        margin: 5,
        width: '260px',
        height:  '180px',
        border: "1 px",
        borderRadius: '20px'
    }
}));
const VideoAvatar = ({broadcast, activeUser, useWebcam, socket, setUseWebcam, email}) => {
    const classes = useStyles();
    const [webcam, setWebcam] = useState(null);
    const handleVideo = (stream) => {
        const cam = document.getElementById('video');
        if(!cam)
            return;
        cam.srcObject = stream;
        setWebcam(cam);
        cam.play();
        
        
    };

    const videoError = (err) => {
        alert(err);
        setUseWebcam(false);
    }

    useEffect(() => {
        if(activeUser.user !== email)
            return;
        
        if(useWebcam)
        {
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
            if (navigator.getUserMedia) {
                navigator.getUserMedia({video: true, audio: true}, handleVideo, videoError);
            }
            broadcast?.func();
        }
        else
        {
            webcam?.pause();
            setWebcam(null);
            broadcast.broadcastIntervalClear();
            
        }
    }, [useWebcam])

    useEffect(() => {
        socket.on('NEW_FRAME',(data) => {
            var userImg = document.getElementById(data.email);
            if(!!userImg){
                userImg.src = data.frame;
                userImg.style.display = '';
            }
        });
    }, []);

    return(
        <>
            {
                useWebcam && activeUser.user === email ? (
                    <div  style={{borderRadius:'20px', overflow:'hidden',MozBorderRadius: "40px", width: '260px'}}>
                        <video height="220px" crossOrigin="anonymous" className={activeUser.user} id="video"/>
                    </div>
                ) : (
                    <>
                        <img className={classes.image} style={{display: useWebcam ? '' : 'none'}} id={email} />
                        <Avatar style={{display: useWebcam ? 'none' : ''}} className={classes.avatar}>{email.toString().substr(0,2)}</Avatar>
                    </>
                )
            }
        </>
    );
};

export default VideoAvatar;