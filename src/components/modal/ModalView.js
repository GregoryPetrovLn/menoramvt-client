import React from 'react';
import './Modal.scss'
import Modal from '@mui/material/Modal';
import Loader from "../loader/Loader";

const ModalView = ({children, open, isLoading, handleClose}) => {
    return (
        <div className={'custom-modal'}>
            <Modal
                open={open}
                onClose={handleClose}
            >
                {<div className={'custom-modal__container'}>
                    {isLoading ? <Loader/> : children}
                </div>}
            </Modal>
        </div>
    );
};

export default ModalView;