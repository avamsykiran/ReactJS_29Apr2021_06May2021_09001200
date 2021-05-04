import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { addTask, getTaskById, updateTask } from '../services/taskService';

class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            task: { id: 0, title: '', status: '' },
            validErr: { id: null, title: null, status: null },
            isEditing: false,
            isTaskSaved: false,
            isFormValid: false,
            err: null
        };
    }

    componentDidMount() {
        let taskId = parseInt(this.props.match.params.id);

        if (taskId) {
            let isEditing = true;
            getTaskById(taskId).then(
                resp => this.setState({ task: resp.data, isEditing }),
                err => {
                    console.log(err);
                    this.setState({ err: "Unable to load the record to be edited" });
                }
            );
        }
    }

    formSubmitted = (event) => {
        event.preventDefault(); //will prevent the formfrom auto-relaoding ..etc

        let p = null;
        if (this.state.isEditing)
            p = updateTask(this.state.task);
        else
            p = addTask(this.state.task);

        p.then(
            resp => {
                if (resp.status == 201 || resp.status==200) {
                    this.setState({ isTaskSaved: true });
                }
            },
            err => {
                console.log(err);
                this.setState({ err: "Unable to save the record " });
            }
        );
    }

    onChangeHandler = event => {

        /*  let name = event.target.name;
          let value = event.target.value; */

        let { name, value } = event.target;
        let err = null;
        let isFormValid = true;

        switch (name) {
            case 'id':
                value = parseInt(value);
                if (value <= 0) {
                    err = "Id is mandate and can be either a positive non-zero number";
                    isFormValid = false;
                }
                break;
            case 'title':
                if (value == null || value.length < 10) {
                    err = "Title is a mandate field and it msut be atleast 10 chars in length";
                    isFormValid = false;
                }
                break;
            case 'status':
                if (value == null || value.length == 0) {
                    err = "Please select a status";
                    isFormValid = false;
                }
                break;
        }

        this.setState({ isFormValid, task: { ...this.state.task, [name]: value }, validErr: { ...this.state.validErr, [name]: err } });
    };

    render() {

        let finalDom = null;

        if (this.state.isTaskSaved) {
            finalDom = <Redirect to="/tasksList" />
        } else if(this.state.err){
            finalDom = (
                <section className="container-fluid p-4">
                    <div className="alert alert-danger">
                        <strong>{this.state.err}</strong>
                    </div>
                </section>
            );
        }else {

            let { task, validErr } = this.state;

            finalDom = (
                <section className="container-fluid p-4">

                    <div className="col-sm-4 mx-auto">
                        <h3>{this.state.isEditing ? "Edit Task" : "New Task"}</h3>

                        <form onSubmit={this.formSubmitted} >
                            <div className="form-group">
                                <label className="form-control-label">Task Id</label>
                                <input type="number" value={task.id} className="form-control mr-1"
                                    name="id"
                                    readOnly={this.state.isEditing}
                                    onChange={this.onChangeHandler}
                                />
                                {validErr.id &&
                                    <div className="alert alert-danger">
                                        <strong>{validErr.id}</strong>
                                    </div>
                                }
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">Title</label>
                                <input type="text" value={task.title} className="form-control mr-1"
                                    name="title"
                                    onChange={this.onChangeHandler}
                                />
                                {validErr.title &&
                                    <div className="alert alert-danger">
                                        <strong>{validErr.title}</strong>
                                    </div>
                                }
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">Status</label>
                                <select className="form-control mr-1" value={task.status} name="status"
                                    onChange={this.onChangeHandler}
                                >
                                    <option value="">--SELECT----</option>
                                    <option value="Done">Completed</option>
                                    <option value="Planned">Planned</option>
                                    <option value="In Progress">Started</option>
                                </select>
                                {validErr.status &&
                                    <div className="alert alert-danger">
                                        <strong>{validErr.status}</strong>
                                    </div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" disabled={!this.state.isFormValid} >
                                    Save Task
                                </button>
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