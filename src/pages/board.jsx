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

    // https://www.youtube.com/watch?v=jCY6DH8F4oc

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
            console.log('list->', list)
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
                        <Column key={index}>
                            <label className="title">{title}</label>
                            {
                                data.map(task => (
                                    <TaskCard key={task.id} {...task}/>
                                ))
                            }
                        </Column>
                    )) 
                }
                {/* <Column>
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
                </Column> */}
            </BoardContainer>
            {/* {taskList.map(t => console.log('item->', t))}
            {taskList && taskList.length && (<span>items {taskList.length}</span>)} */}
        </>
    )
}

export default Board