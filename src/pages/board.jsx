import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar";
import TaskCard from "../components/task";
import { getTasks } from "../firebase/task";
import { BoardContainer, Column } from "../styles/board";
import { updateTaskList } from "../redux/store/task-list-slice"; 

const Board = () => {
    const { taskList } = useSelector(store => store)
    const dispatch = useDispatch()

    useEffect(() => {
        async function getData() {
            const data = await getTasks()

            const pendingList = {
                title: 'Pending',
                data: data.filter(l => l.status === '1')
            }

            const inProgressList = {
                title: 'In Progress',
                data: data.filter(l => l.status === '2')
            }

            const doneList = {
                title: 'Done',
                data: data.filter(l => l.status === '3')
            }

            const list = [pendingList, inProgressList, doneList]
            dispatch(updateTaskList(list))
        }
        getData()
    }, [dispatch])

    return (
        <>
            <Navbar />
            <BoardContainer>
                {
                    taskList.map(({title, data}, index) => (
                        <Column key={index} idx={index} hasBorders={data.length > 0}>
                            <label className="title">{title}</label>
                            {
                                data.map(task => (
                                    <TaskCard key={task.id} {...task}/>
                                ))
                            }
                        </Column>
                    )) 
                }
            </BoardContainer>
        </>
    )
}

export default Board