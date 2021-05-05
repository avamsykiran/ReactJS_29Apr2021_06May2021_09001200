import { Component, useEffect, useState } from 'react';
import { getAllTasks, deleteTask } from '../services/taskService';
import TaskRow from './TaskRow';

const TaskManager = (props) => {

    let [tasks, setTasks] = useState(null);
    let [err, setErr] = useState(null);

    useEffect(() => {
        getAllTasks().then(
            resp => setTasks(resp.data),
            err => {
                console.log(err);
                setErr("Sorry! Unable to fetech data.");
            }
        );
    }, []);

    const remove = (id) => {
        deleteTask(id).then(
            resp => {
                if (resp.status == 200) {
                    setTasks(tasks.filter(t => t.id != id));
                }
            },
            err => {
                console.log(err);
                setErr("Sorry! Unable to delete data.");
            }
        );
    }

    return (
        <section className="container-fluid p-4">

            <h3> Tasks List </h3>

            {(!tasks && !err) &&
                <div className="alert alert-info">
                    <strong>Loading data, Please wait..!</strong>
                </div>
            }

            {(err) &&
                <div className="alert alert-danger">
                    <strong>{err}</strong>
                </div>
            }

            {(tasks && tasks.length == 0) &&
                <div className="alert alert-info">
                    <strong>No Records Are Available!</strong>
                </div>
            }

            {tasks && tasks.length > 0 &&
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Task#</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(t => (
                            <TaskRow key={t.id} task={t} remove={remove} />
                        ))}
                    </tbody>
                </table>
            }
        </section>
    );
};

export default TaskManager;
