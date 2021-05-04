import axios from 'axios';

const apiUrl = "http://localhost:9090/tasks";

export const addTask = (task) => {
   return axios.post(apiUrl,task);
};

export const updateTask = (task) => {
    //return axios.put(apiUrl +"/"+task.id,task);
    return axios.put(`${apiUrl}/${task.id}`,task);
};

export const deleteTask = (id) => {
    return axios.delete(`${apiUrl}/${id}`);
};

export const getAllTasks = () =>{
    return axios.get(apiUrl);
};

export const getTaskById = (id) => {
    return axios.get(`${apiUrl}/${id}`);
};