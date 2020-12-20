import { Modal } from '@material-ui/core';
import React,{useState} from 'react';


const CustomModal = ({children}) => {
    const [open,setOpen] = useState(true);
    return(
        <Modal
            open={open}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            onClose={()=>setOpen(false)}
        >
            {children}
        </Modal>
    );
};

export default CustomModal;