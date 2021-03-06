import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert"
import 'react-confirm-alert/src/react-confirm-alert.css';
import UpdateTaskModal from "../updateTaskModal";
import Icon from "../icon";
import ViewTaskModal from "../viewTaskModal";
import {
    CardActions,
    IconAction,
    CardContainer,
    CardHeader,
} from "./style";
import { deleteTask, updateTask } from "../../firebase/task";
import { useDispatch } from "react-redux";
import { changeStatusFromList, removeTask } from "../../redux/store/task-list-slice";
import openToast from "../utils/open-toast";
import { load } from "../../redux/store/ui-slice";

const TaskCard = (props) => {
    const {
        id,
        name,
        status,
        priority,
    } = props

    const dispatch = useDispatch()

    const [isViewModalOpen, setViewModalOpen] = useState(false)
    const [isEditModalOpen, setEditModalOpen] = useState(false)

    const handleOpenEditModal = () => setEditModalOpen(true)
    const handleCloseEditModal = () => setEditModalOpen(false)

    const handleDelete = async () => {
        confirmAlert({
            title: 'Delete task',
            message: 'Are you sure you want to delete this task?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        dispatch(removeTask(props))
                        dispatch(load({ loading: true }))
                        await deleteTask(id, props)
                        dispatch(load({ loading: false }))
                        openToast('Task deleted!', 'success')
                    }
                },
                {
                    label: 'No'
                }
            ],
            overlayClassName: "confirm-dialog"
        })
    }

    const handleOpenViewModal = () => setViewModalOpen(true)
    const handleCloseViewModal = () => setViewModalOpen(false)

    const handleStatusChange = async ({ target: { value } }) => {
        const task = {...props, status: value}
        dispatch(load({ loading: true }))
        await updateTask(id, task)
        dispatch(load({ loading: false }))
        dispatch(changeStatusFromList({
            task,
            values: {
                oldVal: status,
                newVal: value
            }
        }))
    }

    return (
        <>
            <CardContainer>
                <CardActions>
                    <IconAction onClick={handleOpenEditModal}>
                        <Icon name="edit" />
                    </IconAction>
                    <IconAction onClick={handleDelete}>
                        <Icon name="delete" />
                    </IconAction>
                    <IconAction onClick={handleOpenViewModal}>
                        <Icon name="expand" />
                    </IconAction>
                </CardActions>
                <CardHeader priority={priority}>
                    <h4>{name}</h4>
                    <span className="priority-indicator" />
                </CardHeader>
                <select value={status} onChange={handleStatusChange}>
                    <option value="1">Pending</option>
                    <option value="2">In Progress</option>
                    <option value="3">Done</option>
                </select>
            </CardContainer>
            <ViewTaskModal
                id="viewTask"
                open={isViewModalOpen}
                onClose={handleCloseViewModal}
                data={props}
            />
            <UpdateTaskModal
                id="updateTask"
                open={isEditModalOpen}
                onClose={handleCloseEditModal}
                data={props}
            />
        </>
    )

}

export default TaskCard