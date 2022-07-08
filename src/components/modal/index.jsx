import React from "react";
import ReactModal from "react-modal";
import { Actions, ModalContainer, IconAction } from "./style";
import Icon from '../icon'

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.7)'

const Modal = ({
    open,
    children,
    onClose,
    width,
    height
}) => {

    const customStyles = {
        content: {
            width: width || '70%',
            height: height || '60%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
    }

    const handleEscClose = ({key}) => {
        if (key === 'Escape') {
            onClose()
        }
    }

    const handleClose = () => {
        onClose()
    }

    return(
        <div onKeyUp={handleEscClose}>
            <ReactModal
                appElement={document.body}
                isOpen={open}
                style={customStyles}
                onRequestClose={handleClose}
            >
                <ModalContainer>
                    <Actions>
                        <IconAction onClick={handleClose}>
                            <Icon name="close"/>
                        </IconAction>
                    </Actions>
                    {children}
                </ModalContainer>
            </ReactModal>
        </div>
    )
}

export default Modal