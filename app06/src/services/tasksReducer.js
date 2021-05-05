import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from './tasksActions';

const initialState = {
    tasks: [
        { id: 1, title: 'Create Product Backlog', status: 'Done' },
        { id: 2, title: 'Create Sprint Plans', status: 'In Progress' },
        { id: 3, title: 'Create Sprint 1 Back Log', status: 'Planned' }
    ]
};

const tasksReducer = (oldState = initialState, { type, payload }) => {
    let modfiedState = null;

    switch (type) {
        case ADD_TASK:
            let tasksAfterAdding = [...oldState.tasks,payload];
            modfiedState = {...oldState,tasks:tasksAfterAdding};
            break;
        case UPDATE_TASK:
            let tasksAfterUpdating = oldState.tasks.map(t => t.id==payload.id?payload:t);
            modfiedState = {...oldState,tasks:tasksAfterUpdating};
            break;
        case DELETE_TASK:
            let tasksAfterDeleting = oldState.tasks.filter(t => t.id!=payload);
            modfiedState = {...oldState,tasks:tasksAfterDeleting};
            break;
        default:
            modfiedState = { ...oldState };
            break;
    }

    return modfiedState;
};

export default tasksReducer;