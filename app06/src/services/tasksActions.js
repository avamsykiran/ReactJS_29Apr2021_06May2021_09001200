
export const ADD_TASK = 'add task';
export const UPDATE_TASK = 'update task';
export const DELETE_TASK = 'delete task';

export const prepareAddTaskAction = (task) => ({
    type:ADD_TASK, payload:task
});

export const prepareUpdateTaskAction = (task) => ({
    type:UPDATE_TASK, payload:task
});

export const prepareDeleteTaskAction = (taskId) => ({
    type:DELETE_TASK, payload:taskId
});