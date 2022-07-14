import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth";
import UpdateTaskModal from "../updateTaskModal";
import Icon from "../icon";
import { NavbarContainer, ItemsContainer, Item, NavMainActions } from "./style";
import { useDispatch } from "react-redux";
import { updateTaskList } from "../../redux/store/task-list-slice";
import { getTasks } from "../../firebase/task";
import getColumns from "../utils/get-columns";
import { load } from "../../redux/store/ui-slice";

const Navbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isModalOpen, setModalOpen] = useState(false)

    const handleOpenModal = () => setModalOpen(true)

    const handleCloseModal = () => setModalOpen(false)

    const handleFilter = async ({target: {value}}) => {
        const priority = value !== '-1' ? value : null
        dispatch(load({ loading: true }))
        const data = await getTasks(priority)
        dispatch(load({ loading: false }))
        const list = getColumns(data)
        dispatch(updateTaskList(list))
    }

    const handleLogout = async () => {
        try {
            dispatch(load({ loading: true }))
            await logout()
            dispatch(load({ loading: false }))
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <NavbarContainer>
                <ItemsContainer>
                    <NavMainActions>
                        <Item>Tasks</Item>
                        <Item onClick={handleOpenModal}>
                            <Icon name="add" />
                        </Item>
                        <Item>
                            <select className="filter" defaultValue="" onChange={handleFilter}>
                                <option value="" disabled>Filter by priority</option>
                                <option value="-1">All</option>
                                <option value="1">High - Urgent</option>
                                <option value="2">Medium - ASAP</option>
                                <option value="3">Low - If there's time</option>
                            </select>
                        </Item>
                    </NavMainActions>
                    <Item onClick={handleLogout}>
                        <Icon name="logout" />
                    </Item>
                </ItemsContainer>
            </NavbarContainer>
            <UpdateTaskModal
                id="createTask"
                open={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    )
}

export default Navbar