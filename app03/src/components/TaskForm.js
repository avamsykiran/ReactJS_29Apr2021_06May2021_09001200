import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { addTask, getTaskById, updateTask } from '../services/taskService';

class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            task: { id: 0, title: '', status: '' },
            isEditing: false,
            isTaskSaved: false
        };
    }

    componentDidMount() {
        let taskId = parseInt(this.props.match.params.id);

        if (taskId) {
            let isEditing = true;
            let task = getTaskById(taskId);
            this.setState({ task, isEditing });
        }
    }

    formSubmitted = (event) => {
        event.preventDefault(); //will prevent the formfrom auto-relaoding ..etc

        if (this.state.isEditing)
            updateTask(this.state.task);
        else
            addTask(this.state.task);
            
        this.setState({ isTaskSaved: true });
    }

    render() {

        let finalDom = null;

        if (this.state.isTaskSaved) {
            finalDom = <Redirect to="/tasksList" />
        } else {

            let task = this.state.task;

            finalDom = (
                <section className="container-fluid p-4">

                    <div class="col-sm-4 mx-auto">
                        <h3>{this.state.isEditing ? "Edit Task" : "New Task"}</h3>

                        <form onSubmit={this.formSubmitted} >
                            <div className="form-group">
                                <label className="form-control-label">Task Id</label>
                                <input type="number" value={task.id} className="form-control mr-1"
                                    readOnly={this.state.isEditing}
                                    onChange={event => this.setState({ task: { ...task, id: parseInt(event.target.value) } })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">Title</label>
                                <input type="text" value={task.title} className="form-control mr-1"
                                    onChange={event => this.setState({ task: { ...task, title: event.target.value } })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">Status</label>
                                <select className="form-control mr-1" value={task.status}
                                    onChange={event => this.setState({ task: { ...task, status: event.target.value } })}
                                >
                                    <option value="">--SELECT----</option>
                                    <option value="Done">Completed</option>
                                    <option value="Planned">Planned</option>
                                    <option value="In Progress">Started</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Save Task</button>
                            </div>

                        </form>
                    </div>
                </section>
            );
        }

        return finalDom;
    }
}

export default TaskForm;