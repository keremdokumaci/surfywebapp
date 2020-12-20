import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ChatContext} from '../../../contexts/ChatContext';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const ChatCard = (props) => {
    const classes = useStyles();
    const {title,description,imageUrl,owner,roomId} = props;
    const {setCurrentChatRoom} = useContext(ChatContext);

    let history = useHistory();
    
    const joinChat = () => {
        setCurrentChatRoom({title:title,description:description,owner:owner,imageUrl:imageUrl,roomId:roomId});
        history.push(`/rooms/${roomId}`);
    }
    return(
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={joinChat}>
                        Konuşmaya katıl
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};


export default ChatCard;