import { ADD_TASK, prepareAddTaskAction, prepareUpdateTaskAction, UPDATE_TASK } from "./tasksActions";

describe("tasksActions",()=>{

    let task;
    
    beforeEach(()=>{
        task = {id:1,title:"work to be done"};
    });

    afterEach(()=>{
        task=null;
    });

    it("#prepareAddTaskAction should return add action",()=>{
        let addAction = prepareAddTaskAction(task);
        expect(addAction).toStrictEqual({type:ADD_TASK, payload:task});
    }); 
    
    it("#prepareUpdateTaskAction should return update action",()=>{
        let addAction = prepareUpdateTaskAction(task);
        expect(addAction).toStrictEqual({type:UPDATE_TASK, payload:task});
    });
}); 