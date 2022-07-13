import React, { useEffect } from "react";
import Modal from "../modal";
import { FormContainer, RowItem } from "../../styles/form-modal";
import { useDispatch, useSelector } from "react-redux";
import { 
    clearTaskForm,
    updateControlEvts,
    updateTaskForm,
} from "../../redux/store/form-task-slice";
import ErrorTag from "../errorTag";
import { createTask, updateTask } from "../../firebase/task";
import { pushTask, updateTaskFromList } from "../../redux/store/task-list-slice";

const UpdateTaskModal = (props) => {
    const { id, open, onClose, data } = props
    const { formTask, auth: { uid } } = useSelector(store => store)

    const isEditMode = id !== 'createTask'

    const dispatch = useDispatch()

    useEffect(() => {
        if (open && isEditMode) {
            dispatch(updateTaskForm(data))
        }
    }, [open])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const task = { ...formTask, uid }
        delete task.controls
        if(!isEditMode) {
            const createdTask = await createTask(task)
            task.id = createdTask.id
            dispatch(clearTaskForm())
            dispatch(pushTask(task))
            document.getElementById('taskForm').reset()
        } else {
            await updateTask(data.id, task)
            dispatch(updateTaskFromList(task))
            onClose()
        }
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
                    <h4>{!isEditMode ? 'Create task' : 'Edit Task'}</h4>
                    <RowItem>
                        <input
                            name="name"
                            placeholder="Name"
                            onChange={handleInput}
                            onBlur={touchControl}
                            value={formTask.name}
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
                            value={formTask.priority}
                        >
                            <option value="" disabled>Select priority</option>
                            <option value="1">High - Urgent</option>
                            <option value="2">Medium - ASAP</option>
                            <option value="3">Low - If there's time</option>
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
                            value={formTask.status}
                        >
                            <option value="">Select status</option>
                            <option value="1">Pending</option>
                            <option value="2">In Progress</option>
                            <option value="3">Done</option>
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
                            value={formTask.description}
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
                            value={formTask.note}
                        />
                    </RowItem>
                    <RowItem className="footer">
                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={!isValid()}
                        >
                            {!isEditMode ? 'Create' : 'Edit'}
                        </button>
                        <button
                            type="button"
                            className="btn-invert"
                            onClick={onClose}
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