import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {CreateChatRoom} from '../api/index';


const NewChatRoomPopup = (props) => {
    const {openModal,setOpenModal} = props;
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [chatRoomImage,setChatRoomImage] = useState(null);
    const [title,setTitle] = useState(null);
    const [description,setDescription] = useState(null);


    const handleClose = () => {
        setOpenModal(false);
    };

    const createChatRoom = async (e) => {
        e.preventDefault();

        const [response,error] = await CreateChatRoom({email:email,password:password,imageUrl:chatRoomImage,title:title,description:description});
        if(!!response)
        {
            setOpenModal(false);
        }
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

    const titleChange = (val) => {
        setTitle(val.target.value);
    }

    const descriptionChange = (val) => {
        setDescription(val.target.value);
    }

    return(
        <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Konuşma Başlat</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Konuşma odası oluşturmak için lütfen aşağıdaki alanları doldurunuz.
                </DialogContentText>
                <form onSubmit={createChatRoom}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        autoComplete={false}
                        onChange={emailChange}
                    />
                    <TextField
                        margin="dense"
                        id="title"
                        label="Başlık"
                        type="text"
                        fullWidth
                        autoComplete={false}
                        onChange={titleChange}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Açıklama"
                        type="text"
                        fullWidth
                        autoComplete={false}
                        onChange={descriptionChange}
                    />
                    <TextField
                        margin="dense"
                        id="image"
                        label="Resim Adresi"
                        type="url"
                        fullWidth
                        autoComplete={false}
                        onChange={chatroomImageChange}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Şifre"
                        type="password"
                        fullWidth
                        onChange={passwordChange}
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