import React from "react";
import Modal from "../modal";
import { FormContainer, RowItem } from "../../styles/form-modal";

const ViewTaskModal = (props) => {

    return (
        <Modal {...props} width="600px" height="435px">
            <div>
                <FormContainer>
                    <RowItem>
                        <h4>Name of the sent task</h4>
                        <span className="priority-indicator" />
                    </RowItem>
                    <RowItem>
                        Status
                    </RowItem>
                    <RowItem>
                        <p>Description</p>
                    </RowItem>
                    <RowItem>
                        <p><strong>*Note</strong></p>
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