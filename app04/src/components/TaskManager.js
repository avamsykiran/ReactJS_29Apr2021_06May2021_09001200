import { Component } from 'react';
import { getAllTasks,deleteTask} from '../services/taskService';
import TaskRow from './TaskRow';

class TaskManager extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: null,
            err:null
        };

    }

    componentDidMount() {
        getAllTasks().then(
            resp => this.setState({ tasks:resp.data }),
            err => {
                console.log(err);
                this.setState({err:"Sorry! Unable to fetech data."});
            }
        );
    }

    delete = (id) => {
        deleteTask(id).then(
            resp => {
                if(resp.status==200){
                    this.setState({tasks:this.state.tasks.filter(t => t.id!=id)});
                }
            },
            err => {
                console.log(err);
                this.setState({err:"Sorry! Unable to delete data."});
            }
        );
    }

    render() {
        return (
            <section className="container-fluid p-4">

                <h3> Tasks List </h3>

                {(!this.state.tasks && !this.state.err) && 
                    <div className="alert alert-info">
                        <strong>Loading data, Please wait..!</strong>
                    </div>
                }
                
                {(this.state.err) && 
                    <div className="alert alert-danger">
                        <strong>{this.state.err}</strong>
                    </div>
                }

                {(this.state.tasks && this.state.tasks.length ==0) && 
                    <div className="alert alert-info">
                        <strong>No Records Are Available!</strong>
                    </div>
                }

                {this.state.tasks && this.state.tasks.length > 0 &&
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
                                <TaskRow key={t.id} task={t} remove={this.delete}/>
                            ))}
                        </tbody>
                    </table>
                }
            </section>
        );
    }
}

export default TaskManager;
