import { ADD_TASK, UPDATE_TASK, DELETE_TASK, WAIT, LOAD_TASKS, ERROR } from './tasksActions';

const initialState = {
    tasks: null,
    shouldWait: false,
    errMsg: null
};

const tasksReducer = (oldState = initialState, { type, payload }) => {
    let modfiedState = null;

    switch (type) {
        case WAIT:
            modfiedState = { ...oldState, shouldWait: true };
            break;
        case LOAD_TASKS:
            modfiedState = { ...oldState, tasks: payload, shouldWait: false };
            break;
        case ERROR:
            modfiedState = { ...oldState, errMsg:payload, shouldWait: false };
            break;
        case ADD_TASK:
            let tasksAfterAdding = [...oldState.tasks, payload];
            modfiedState = { ...oldState, tasks: tasksAfterAdding, shouldWait: false  };
            break;
        case UPDATE_TASK:
            let tasksAfterUpdating = oldState.tasks.map(t => t.id == payload.id ? payload : t);
            modfiedState = { ...oldState, tasks: tasksAfterUpdating, shouldWait: false  };
            break;
        case DELETE_TASK:
            let tasksAfterDeleting = oldState.tasks.filter(t => t.id != payload);
            modfiedState = { ...oldState, tasks: tasksAfterDeleting, shouldWait: false  };
            break;
        default:
            modfiedState = { ...oldState };
            break;
    }

    return modfiedState;
};

export default tasksReducer;