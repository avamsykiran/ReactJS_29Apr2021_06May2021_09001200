
let tasks = [
    { id: 1, title: 'Create Product Backlog', status: 'done' },
    { id: 2, title: 'Create Sprint Plans', status: 'in progress' },
    { id: 3, title: 'Create Sprint 1 Back Log', status: 'planned' }
];

export const addTask = (task) => {
    tasks.push(task);
};

export const updateTask = (task) => {
    let index = tasks.findIndex(t => t.id===task.id);
    if(index>-1){
        tasks[index]=task;
    }
};

export const deleteTask = (id) => {
    let index = tasks.findIndex(t => t.id===id);
    if(index>-1){
        tasks.splice(index,1);
    }
};

export const getAllTasks = () =>{
    return tasks;
};

export const getTaskById = (id) => {
    return tasks.find(t => t.id===id);
};