import { useState } from "react";

export default function List(){
    const [newtask,SetNewTasks] = useState("");
    const [tasks,SetTasks] = useState([]);
    const addTask=()=>{
        if(newtask.trim()!==""){
            SetTasks([...tasks,newtask.trim()]);
            SetNewTasks("")
        }
    }
    function showTasks(){
        return tasks.map((task,index)=>(
            <div key={index}>
                <b>{task}</b>
                <button onClick={()=>deleteTask(index)}>❌</button>
            </div>
        ))
    }

    function deleteTask(index2delete){
        let remainTasks=tasks.filter((_,index)=>index!==index2delete)
        SetTasks(remainTasks);
    }
    return(
        <div className="list-box">
            <h1>To-Do List</h1>
            <input type="text"
                    placeholder="Enter Your Task..."
                    value={newtask}
                    onChange={(e)=>SetNewTasks(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
            <div className="task-Section">
                {
                    tasks.length?showTasks():"You Have No More Tasks Today !!!"
                }
            </div>
        </div>
    )
}