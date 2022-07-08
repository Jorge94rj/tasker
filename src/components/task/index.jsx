import React, { useState } from "react";
import Icon from "../icon";
import ViewTaskModal from "../viewTaskModal";
import { 
    CardActions,
    IconAction,
    CardContainer,
    CardHeader,
} from "./style";

const TaskCard = () => {
    const [isModalOpen, setModalOpen] = useState(false)

    const handleOpenModal = () => setModalOpen(true)

    const handleCloseModal = () => setModalOpen(false)

    return (
        <>
            <CardContainer>
                <CardActions>
                    <IconAction onClick={handleOpenModal}>
                        <Icon name="expand" />
                    </IconAction>
                </CardActions>
                <CardHeader priority={1}>
                    <h4>Test name</h4>
                    <span className="priority-indicator" />
                </CardHeader>
                <select>
                    <option>status 1</option>
                    <option>status 2</option>
                    <option>status 3</option>
                </select>
            </CardContainer>
            <ViewTaskModal
                id="viewTask"
                open={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    )

}

export default TaskCard