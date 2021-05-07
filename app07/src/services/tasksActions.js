
export const ADD_TASK = 'add task';
export const UPDATE_TASK = 'update task';
export const DELETE_TASK = 'delete task';
export const WAIT = 'wait';
export const ERROR = 'error';
export const LOAD_TASKS = 'load tasks';

export const prepareAddTaskAction = (task) => ({
    type:ADD_TASK, payload:task
});

export const prepareUpdateTaskAction = (task) => ({
    type:UPDATE_TASK, payload:task
});

export const prepareDeleteTaskAction = (taskId) => ({
    type:DELETE_TASK, payload:taskId
});

export const prepareWaitAction = () => ({
    type:WAIT
});

export const prepareErrorAction = (errMsg) => ({
    type:ERROR, payload:errMsg
});

export const prepareLoadTasksAction = (tasks) => ({
    type:LOAD_TASKS, payload:tasks
});