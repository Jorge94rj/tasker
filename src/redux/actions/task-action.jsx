let lastTask = 0

export const addTask = (state, action) => {
    return [
        ...state,
        {
            id: ++lastTask,
            description: action.payload.description,
            resolved: false
        }
    ]
}

export const updateTask = (state, action) => {
    return state.map(
        t => t.id !== action.payload.id ? 
        t : 
        {
            ...t,
            description: action.payload.description,
            resolved: action.payload.resolved
        }
    )
}

export const removeTask = (state, action) => {
    return state.filter(t => t.id !== action.payload.id)
}
