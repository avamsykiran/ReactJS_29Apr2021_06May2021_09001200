import { prepareAddTaskAction, prepareDeleteTaskAction, prepareErrorAction, prepareLoadTasksAction, prepareUpdateTaskAction, prepareWaitAction } from "./tasksActions";
import axios from 'axios';

const tasksApi = "http://localhost:9999/tasks";

export const loadTasksThunk = () => (dispatch) => {
    
    dispatch(prepareWaitAction()); //indicating that the req is gonna start.

    axios.get(tasksApi)
        .then(
            resp => {
                dispatch(prepareLoadTasksAction(resp.data));
            },
            err => {
                console.log(err);
                dispatch(prepareErrorAction("Unable to fetch data!"));
            }
        );
};

export const addTaskThunk = (task) => (dispatch) => {
    
    dispatch(prepareWaitAction()); //indicating that the req is gonna start.

    axios.post(tasksApi,task)
        .then(
            resp => {
                dispatch(prepareAddTaskAction(resp.data));
            },
            err => {
                console.log(err);
                dispatch(prepareErrorAction("Unable to save data!"));
            }
        );
};

export const updateTaskThunk = (task) => (dispatch) => {
    
    dispatch(prepareWaitAction()); //indicating that the req is gonna start.

    axios.put(`${tasksApi}/${task.id}`,task)
        .then(
            resp => {
                dispatch(prepareUpdateTaskAction(resp.data));
            },
            err => {
                console.log(err);
                dispatch(prepareErrorAction("Unable to save data!"));
            }
        );
};

export const deleteTaskThunk = (taskId) => (dispatch) => {
    
    dispatch(prepareWaitAction()); //indicating that the req is gonna start.

    axios.delete(`${tasksApi}/${taskId}`)
        .then(
            resp => {
                dispatch(prepareDeleteTaskAction(taskId));
            },
            err => {
                console.log(err);
                dispatch(prepareErrorAction("Unable to delete data!"));
            }
        );
};
