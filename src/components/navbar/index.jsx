import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth";
import UpdateTaskModal from "../updateTaskModal";
import Icon from "../icon";
import { NavbarContainer, ItemsContainer, Item, NavMainActions } from "./style";

const Navbar = () => {

    const navigate = useNavigate()
    const [isModalOpen, setModalOpen] = useState(false)

    const handleOpenModal = () => setModalOpen(true)

    const handleCloseModal = () => setModalOpen(false)

    const handleLogout = async () => {
        try {
            await logout()
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
                            <Icon name="add"/>
                        </Item>
                        <Item>
                            <input
                                className="search"
                                type="text"
                                placeholder="Search"
                            />
                        </Item>
                        <Item>
                            <select className="filter" defaultValue="">
                                <option value="" disabled>Filter by priority</option>
                                <option>priority 1</option>
                            </select>
                        </Item>
                        {/* <Item>
                            <label className="checkbox-label">Hide done tasks</label>
                        </Item>
                        <Item className="checkbox">
                            <input type="checkbox"/>
                        </Item> */}
                    </NavMainActions>
                    <Item onClick={handleLogout}>
                        <Icon name="logout"/>
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