import { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskRow from './TaskRow';

class TaskManager extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                { id: 1, title: 'Create Product Backlog', status: 'done' },
                { id: 2, title: 'Create Sprint Plans', status: 'in progress' },
                { id: 3, title: 'Create Sprint 1 Back Log', status: 'planned' }
            ]
        };

    }

    add = (task) => {
        this.setState({tasks:[...this.state.tasks,task]});
    }

    delete = (id) => {
        this.setState({ tasks: this.state.tasks.filter(t => t.id !== id) });
    }

    render() {
        return (
            <section className="container-fluid p-4">

                <h3>New Task</h3>
                <AddTaskForm addTask={this.add} />

                <h3> Tasks List </h3>

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
                        {this.state.tasks.map(t => (
                            <TaskRow key={t.id} task={t}  remove={this.delete} />
                        ))}
                    </tbody>
                </table>
            </section>
        );
    }
}

export default TaskManager;
