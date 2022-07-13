const getColumns = (data) => {
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

    return [pendingList, inProgressList, doneList]
}

export default getColumns
