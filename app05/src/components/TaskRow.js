import { Link } from 'react-router-dom';

const TaskRow = ({task,remove}) => (
    <tr>
        <td>{task.id}</td>
        <td>{task.title}</td>
        <td>{task.status}</td>
        <td>
            <Link to={"/editTask/" + task.id} className="btn btn-sm btn-primary mr-1">
                EDIT
            </Link>
            <button className="btn btn-sm btn-danger mr-1"
                onClick={event => remove(task.id)}>
                DELETE
            </button>
        </td>
    </tr>
);

export default TaskRow;