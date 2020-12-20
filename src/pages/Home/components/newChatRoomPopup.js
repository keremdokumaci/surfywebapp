import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const NewChatRoomPopup = (props) => {
    const {openModal,setOpenModal} = props;
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [chatRoomImage,setChatRoomImage] = useState(null);

    const handleClose = () => {
        setOpenModal(false);
    };

    const createChatRoom = (e) => {
        console.log(chatRoomImage);
        console.log(email);
        console.log(password);

        e.preventDefault();
    }

    const emailChange = (val) => {
        setEmail(val.target.value);
    }

    const passwordChange = (val) => {
        setPassword(val.target.value);
    }

    const chatroomImageChange = (val) => {
        setChatRoomImage(val.target.value);
    }

    return(
        <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create Chat Room</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To create a chatroom please type all of necessery fields
                </DialogContentText>
                <form onSubmit={createChatRoom}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        autoComplete={false}
                        onChange={emailChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="image"
                        label="Chat Room Image Url"
                        type="text"
                        fullWidth
                        autoComplete={false}
                        onChange={passwordChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        onChange={chatroomImageChange}
                    />
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button type='submit' color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </form>
                
            </DialogContent>
        </Dialog>
    );
};

export default NewChatRoomPopup;