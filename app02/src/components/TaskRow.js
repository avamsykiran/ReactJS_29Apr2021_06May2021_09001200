
const TaskRow = (props) => (
    <tr>
        <td>{props.task.id}</td>
        <td>{props.task.title}</td>
        <td>{props.task.status}</td>
        <td>
            <button className="btn btn-sm btn-danger mr-1" 
                onClick={event => props.remove(props.task.id)}>
                DELETE
            </button>
        </td>
    </tr>
);

export default TaskRow;