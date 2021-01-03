import React,{useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {AuthContext} from '../../../contexts/AuthContext';


const AuthDialog = (props) => {
    const {openDialog,setOpenDailog,onSubmit} = props;
    const { setUser } = useContext(AuthContext);
    
    const handleClose = () => {
        setOpenDailog(false);
    };

    const emailChange = (val) => {
        setUser({user : val.target.value, cameraEnabled: false});
    }

    return(
        <Dialog open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Konuşmaya Katıl</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Konuşma odasına katılmak için lütfen email adresinizi girin.
                </DialogContentText>
                <form onSubmit={() => {onSubmit()}}>
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
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Vazgeç
                        </Button>
                        <Button type='submit' color="primary">
                            Katıl
                        </Button>
                    </DialogActions>
                </form>
                
            </DialogContent>
        </Dialog>
    );
};

export default AuthDialog;