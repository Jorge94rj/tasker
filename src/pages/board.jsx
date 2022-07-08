import Navbar from "../components/navbar";
import TaskCard from "../components/task";
import { BoardContainer, Column } from "../styles/board";

const Board = () => {    
    return (
        <>
            <Navbar />
            <BoardContainer>
                <Column>
                    <label className="title">Pending</label>
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </Column>
                <Column>
                    <label className="title">In progress</label>
                    <TaskCard />
                </Column>
                <Column>
                    <label className="title">Done</label>
                    <TaskCard />
                </Column>
            </BoardContainer>
        </>
    )
}

export default Board