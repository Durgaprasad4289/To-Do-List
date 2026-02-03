
import { useState} from 'react'

export default function List(){
    let [newtask,Setnewtask]=useState("");
    let [tasks,Settasks] = useState([]);
    const addTask=()=>{
        if (newtask !== ""){
            Settasks([...tasks,newtask]);
            Setnewtask("");
        }
    }

    const showTasks=()=>(
        tasks.map((task,index)=>(
            <div className="cur-task" key={index}>
                <li>{task}</li>
                <p onClick={()=>deletTask(index)}>❌</p>
            </div>
        ))
    )
    const deletTask=(index2delete)=>{
        const newtasks=tasks.filter((_,index)=>index !== index2delete)
        Settasks(newtasks);
    }
    return (
        <div className="container">
            <h1>To-Do List</h1>
            <input type="text"
                    value={newtask}
                    placeholder='Enter Your Task...'
                    onChange={(e)=>Setnewtask(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
            <div className="total-tasks">
                {tasks.length?showTasks():"You have No More Tasks To Preform Toady !!!"}
            </div>
        </div>
    )
}