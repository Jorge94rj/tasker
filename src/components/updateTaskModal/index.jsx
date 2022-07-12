import React from "react";
import Modal from "../modal";
import { FormContainer, RowItem } from "../../styles/form-modal";
import { useDispatch, useSelector } from "react-redux";
import { clearTaskForm, updateControlEvts, updateTaskForm } from "../../redux/store/form-task-slice";
import ErrorTag from "../errorTag";
import { createTask } from "../../firebase/task";
import { pushTask } from "../../redux/store/task-list-slice";

const UpdateTaskModal = (props) => {
    const { data } = props
    const dispatch = useDispatch()
    const { formTask, auth:{uid} } = useSelector(store => store)

    // if (data) {
    //     dispatch(updateTaskForm(data))
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const task = {...formTask, uid}
        delete task.controls
        const createdTask = await createTask(task)
        task.id = createdTask.id
        dispatch(clearTaskForm())
        dispatch(pushTask(task))
        document.getElementById('taskForm').reset()
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
            <form id="taskForm" onSubmit={handleSubmit}>
                <FormContainer>
                    <h4>{ props.id === 'createTask' ? 'Create task' : 'Edit Task'}</h4>
                    <RowItem>
                        <input
                            name="name"
                            placeholder="Name"
                            onChange={handleInput}
                            onBlur={touchControl}
                        />
                    </RowItem>
                    {
                        formTask?.controls?.name?.touched && !formTask.name
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
                        formTask?.controls?.priority?.touched && !formTask.priority
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
                        formTask?.controls?.status?.touched && !formTask.status
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
                        formTask?.controls?.description?.touched && !formTask.description
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

export default UpdateTaskModal