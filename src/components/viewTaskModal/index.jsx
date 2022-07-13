import React from "react";
import Modal from "../modal";
import { FormContainer, RowItem } from "../../styles/form-modal";

const ViewTaskModal = (props) => {
    const { data } = props
    const { name, status, description, note } = data

    const statusText = (() => {
        switch (status) {
            case '1': return 'Pending'
            case '2': return 'In Progress'
            case '3': return 'Done'
            default: return ''
        }
    })()

    return (
        <Modal {...props} width="600px" height="435px">
            <div>
                <FormContainer>
                    <RowItem>
                        <h4>{name}</h4>
                        <span className="priority-indicator" />
                    </RowItem>
                    <RowItem>
                        <label>{statusText}</label>
                    </RowItem>
                    <RowItem>
                        <p>{description}</p>
                    </RowItem>
                    <RowItem>
                        <p>
                            <strong>**Note</strong><br/>{note}
                        </p>
                    </RowItem>
                    <RowItem className="footer">
                        <button
                            className="btn-invert"
                            onClick={props.onClose}
                        >
                            Ok
                        </button>
                    </RowItem>
                </FormContainer>
            </div>
        </Modal>
    )
}

export default ViewTaskModal