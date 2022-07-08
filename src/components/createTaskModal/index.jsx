import React from "react";
import Modal from "../modal";
import { FormContainer, RowItem } from "../../styles/form-modal";
import { useDispatch, useSelector } from "react-redux";
import { updateControlEvts, updateTaskForm } from "../../redux/store/form-task-slice";
import ErrorTag from "../errorTag";

const CreateTaskModal = (props) => {
    const dispatch = useDispatch()
    const { formTask, auth:{uid} } = useSelector(store => store)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('uid->', uid)
    }

    const handleInput = ({ target: { name, value } }) => {
        const form = {}
        form[name] = value
        dispatch(updateTaskForm(form))
    }

    const touchControl = ({ target: { name } }) => {
        dispatch(updateControlEvts({
            name
        }))
    }

    const isValid = () => {
        const { name, priority, status, description } = formTask
        return name && priority && status && description
    }

    return (
        <Modal {...props} width="600px" height="534px">
            <form onSubmit={handleSubmit}>
                <FormContainer>
                    <h4>Create task</h4>
                    <RowItem>
                        <input
                            name="name"
                            placeholder="Name"
                            onChange={handleInput}
                            onBlur={touchControl}
                        />
                    </RowItem>
                    {
                        formTask.controls.name.touched && !formTask.name
                        && <ErrorTag>Name is required</ErrorTag>
                    }
                    <RowItem>
                        <select
                            name="priority"
                            placeholder="Priority"
                            onChange={handleInput}
                            onBlur={touchControl}
                            defaultValue=""
                        >
                            <option value="" disabled>Select priority</option>
                            <option value="1">priority 1</option>
                        </select>
                    </RowItem>
                    {
                        formTask.controls.priority.touched && !formTask.priority
                        && <ErrorTag>Priority is required</ErrorTag>
                    }
                    <RowItem>
                        <select
                            name="status"
                            placeholder="Status"
                            onChange={handleInput}
                            onBlur={touchControl}
                            defaultValue=""
                        >
                            <option value="">Select status</option>
                            <option value="1">status 1</option>
                        </select>
                    </RowItem>
                    {
                        formTask.controls.status.touched && !formTask.status
                        && <ErrorTag>Status is required</ErrorTag>
                    }
                    <RowItem>
                        <textarea
                            name="description"
                            placeholder="Description"
                            onChange={handleInput}
                            onBlur={touchControl}
                        />
                    </RowItem>
                    {
                        formTask.controls.description.touched && !formTask.description
                        && <ErrorTag>Description is required</ErrorTag>
                    }
                    <RowItem>
                        <textarea
                            name="note"
                            placeholder="Note"
                            onChange={handleInput}
                        />
                    </RowItem>
                    <RowItem className="footer">
                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={!isValid()}
                        >
                            Create
                        </button>
                        <button
                            type="button"
                            className="btn-invert"
                            onClick={props.onClose}
                        >
                            Cancel
                        </button>
                    </RowItem>
                </FormContainer>
            </form>
        </Modal>
    )
}

export default CreateTaskModal