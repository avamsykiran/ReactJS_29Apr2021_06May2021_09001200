import { Component } from 'react';

class AddTaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            task: { id: 0, title: '', status: '' }
        };
    }

    formSubmitted = (event) => {
        event.preventDefault(); //will prevent the formfrom auto-relaoding ..etc

        this.props.addTask({...this.state.task});
        this.setState({task: { id: 0, title: '', status: '' }});
    }

    render() {

        let task = this.state.task;

        return (
            <form className="form-inline" onSubmit={this.formSubmitted}>
                <label className="form-control-label">Task Id</label>
                <input type="number" value={task.id} className="form-control mr-1"
                    onChange={event => this.setState({ task: { ...task, id: parseInt(event.target.value) } })}
                />
                <label className="form-control-label">Title</label>
                <input type="text" value={task.title} className="form-control mr-1"
                    onChange={event => this.setState({ task: { ...task, title: event.target.value } })}
                />
                <label className="form-control-label">Status</label>
                <select className="form-control mr-1" value={task.status}
                    onChange={event => this.setState({ task: { ...task, status: event.target.value } })}
                >
                    <option value="">--SELECT----</option>
                    <option value="Done">Completed</option>
                    <option value="Planned">Planned</option>
                    <option value="In Progress">Started</option>
                </select>
                <button className="btn btn-primary">Add Task</button>
            </form>
        );
    }
}

export default AddTaskForm;