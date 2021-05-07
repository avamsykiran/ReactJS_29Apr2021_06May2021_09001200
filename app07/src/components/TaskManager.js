import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TaskRow from './TaskRow';
import { loadTasksThunk } from '../services/tasksThunks';

const TaskManager = ({ tasks, wait, err, load }) => {

    useEffect(load,[]);

    return (
        <section className="container-fluid p-4">

            <h3> Tasks List </h3>

            {wait &&
                <div className="alert alert-info">
                    <strong>Please Wait While Loading..!</strong>
                </div>
            }

            {err &&
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
                            <TaskRow key={t.id} task={t} />
                        ))}
                    </tbody>
                </table>
            }
        </section>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
    wait: state.shouldWait,
    err: state.errMsg
});

const mapDispatchToProps = (disptach) => ({
    load: () => disptach(loadTasksThunk())
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(TaskManager);
